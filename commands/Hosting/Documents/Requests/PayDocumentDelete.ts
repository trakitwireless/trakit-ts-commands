import { RepDocumentDelete } from "../Responses/RepDocumentDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayDocument } from "./PayDocument";

/**
 * Deletes an existing {@link Document}.
 **/
export class PayDocumentDelete extends PayDocument { 
	override createReply(json: any): Reply {
		return new RepDocumentDelete(json);
	}
}