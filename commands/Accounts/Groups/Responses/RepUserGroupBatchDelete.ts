import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link UserGroup}.
	 **/
	userGroups: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroups = (json.userGroups as JsonObject[])?.map((ug: any) => new ContentIdDeleted(ug));
	}
}