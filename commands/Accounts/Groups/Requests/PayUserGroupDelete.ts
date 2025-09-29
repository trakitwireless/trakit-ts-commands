import { Reply } from "../../../API/Responses/Reply";
import { RepUserGroupDelete } from "../Responses/RepUserGroupDelete";
import { PayUserGroup } from "./PayUserGroup";

/**
 * Deletes an existing {@link UserGroup}.
 **/
export class PayUserGroupDelete extends PayUserGroup { 
	override createReply(json?: JsonObject): Reply {
		return new RepUserGroupDelete(json);
	}
}