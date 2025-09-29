import { RepContactDelete } from "../Responses/RepContactDelete";
import { Reply } from "../../API/Responses/Reply";
import { PayContact } from "./PayContact";

/**
 * Deletes an existing {@link Contact}.
 **/
export class PayContactDelete extends PayContact { 
	override createReply(json?: JsonObject): Reply {
		return new RepContactDelete(json);
	}
}