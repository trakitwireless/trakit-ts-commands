import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link document}.
 */
export class RepDocumentMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	document: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.document = ContentIdCompany.fromJSON(json?.document as JsonObject);
	}
}