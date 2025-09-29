import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Document}.
	 **/
	document: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.document = ContentIdDeleted.fromJSON(json?.document);
	}
}