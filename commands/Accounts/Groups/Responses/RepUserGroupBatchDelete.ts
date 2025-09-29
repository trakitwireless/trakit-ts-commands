import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

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
		this.userGroups = json.userGroups?.map((ug: any) => new ContentIdDeleted(ug));
	}
}