import { PayDocument } from "./PayDocument";

/**
 * Deletes an existing {@link Document}.
 **/
export class PayDocumentDelete extends PayDocument { 
	override createReply(json: any): Reply {
		return new RepDocumentDelete(json);
	}
}