import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link document}.
 */
export class RepDocumentDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Document}.
	 */
	document: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "Document");
		this.document = ContentIdDeleted.fromJSON(json?.document as JsonObject);
	}
	override getKey() { return this.document?.id as ulong; }
	override getCompanyId() { return this.document?.company as ulong; }
}