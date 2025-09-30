import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentDelete } from "../Responses/RepDocumentDelete";
import { PayDocument } from "./PayDocument";

/**
 * Restores a deleted {@link Document}.
 **/
export class PayDocumentRestore extends PayDocument { 
	override createReply(json: JsonObject): Reply {
		return new RepDocumentDelete(json as JsonObject);
	}
}