import { Document, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentGet extends ReplySyncGet<Document> {
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