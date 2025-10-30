import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Document}.
	 **/
	documents: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Document");
		this.documents = (json?.documents as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
	protected override _getKeys() { return this.documents?.map(d => d.id) as ulong[]; }
}