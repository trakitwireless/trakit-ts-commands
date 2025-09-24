import { PayDocument } from "./PayDocument";

/**
 * Restores a deleted {@link Document}.
 **/
export class PayDocumentRestore extends PayDocument { 
	override createReply(json: any): Reply {
		return new RepDocumentRestore(json);
	}
}