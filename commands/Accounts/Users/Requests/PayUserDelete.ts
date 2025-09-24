import { RepUserDelete } from "../Responses/RepUserDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayUser } from "./PayUser";

/**
 * Deletes an existing {@link User}.
 **/
export class PayUserDelete extends PayUser { 
	override createReply(json: any): Reply {
		return new RepUserDelete(json);
	}
}