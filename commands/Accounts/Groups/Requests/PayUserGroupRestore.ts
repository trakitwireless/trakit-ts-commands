import { Reply } from "../../../API/Responses/Reply";
import { RepUserGroupDelete } from "../Responses/RepUserGroupDelete";
import { PayUserGroup } from "./PayUserGroup";

/**
 * Restores a deleted {@link UserGroup}.
 **/
export class PayUserGroupRestore extends PayUserGroup { 
	override createReply(json: any): Reply {
		return new RepUserGroupDelete(json);
	}
}