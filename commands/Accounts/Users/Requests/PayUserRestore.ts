import { Reply } from "../../../API/Responses/Reply";
import { RepUserDelete } from "../Responses/RepUserDelete";
import { PayUser } from "./PayUser";

/**
 * Restores a deleted {@link User}.
 **/
export class PayUserRestore extends PayUser { 
	override createReply(json?: JsonObject): Reply {
		return new RepUserDelete(json);
	}
}