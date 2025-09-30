import { RepFormResultDelete } from "../Responses/RepFormResultDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayFormResult } from "./PayFormResult";

/**
 * Deletes an existing {@link FormResult}.
 */
export class PayFormResultDelete extends PayFormResult { 
	override createReply(json: JsonObject): Reply {
		return new RepFormResultDelete(json as JsonObject);
	}
}