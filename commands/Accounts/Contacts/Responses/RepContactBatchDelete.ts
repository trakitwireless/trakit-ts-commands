import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link contact}.
 */
export class RepContactBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Contact}.
	 */
	contacts: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Contact");
		this.contacts = (json?.contacts as JsonObject[])?.map((c: any) => new ContentIdDeleted(c));
	}
	protected override _getKeys() { return this.contacts?.map(c => c.id) as ulong[]; }
	override getCompanyId() { return this.contacts?.[0]?.company as ulong; }
	override getResults() { return this.contacts as ContentIdDeleted[]; }
}