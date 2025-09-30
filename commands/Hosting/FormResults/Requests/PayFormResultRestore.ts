import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepFormResultDelete } from "../Responses/RepFormResultDelete";
import { PayFormResult } from "./PayFormResult";

/**
 * Restores a deleted {@link FormResult}.
 */
export class PayFormResultRestore extends PayFormResult { 
	override createReply(json: JsonObject): Reply {
		return new RepFormResultDelete(json as JsonObject);
	}
}