import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentDelete } from "../Responses/RepDocumentDelete";
import { PayDocument } from "./PayDocument";

/**
 * Deletes an existing {@link Document}.
 **/
export class PayDocumentDelete extends PayDocument { 
	override createReply(json: JsonObject): Reply {
		return new RepDocumentDelete(json as JsonObject);
	}
}