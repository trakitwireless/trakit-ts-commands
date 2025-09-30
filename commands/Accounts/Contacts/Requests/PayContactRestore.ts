import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepContactDelete } from "../Responses/RepContactDelete";
import { PayContact } from "./PayContact";

/**
 * Restores a deleted {@link Contact}.
 **/
export class PayContactRestore extends PayContact { 
	override createReply(json?: JsonObject): Reply {
		return new RepContactDelete(json as JsonObject);
	}
}