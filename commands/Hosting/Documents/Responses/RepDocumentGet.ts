import { Document, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentGet extends Reply {
	/**
	 * The requested {@link Document}.
	 **/
	document: Document | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.document) {
			this.document = new Document(json.document as JsonObject);
		}
	}
}