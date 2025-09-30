import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepFormResultDelete } from "../Responses/RepFormResultDelete";
import { PayFormResult } from "./PayFormResult";

/**
 * Deletes an existing {@link FormResult}.
 */
export class PayFormResultDelete extends PayFormResult { 
	override createReply(json: JsonObject): Reply {
		return new RepFormResultDelete(json as JsonObject);
	}
}