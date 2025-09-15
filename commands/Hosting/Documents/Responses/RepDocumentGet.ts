import { nothing,Document } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentGet extends Reply {
	/**
	 * The requested {@link Document}.
	 **/
	document: Document | nothing;

	constructor(json: any) {
		super(json);
		this.document = json?.document
			? new Document(json.document)
			: null;
	}
}