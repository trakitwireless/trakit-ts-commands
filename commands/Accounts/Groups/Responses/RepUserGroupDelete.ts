import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link UserGroup}.
	 **/
	userGroup: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentIdDeleted.fromJSON(json?.userGroups);
	}
}