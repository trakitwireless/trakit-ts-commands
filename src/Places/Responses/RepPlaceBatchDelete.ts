import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link place}.
 */
export class RepPlaceBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Place}.
	 */
	places: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Place");
		this.places = ((json?.places || json?.placeGenerals) as JsonObject[])?.map(item => new ContentIdDeleted(item));
	}
	protected override _getKeys() { return this.places?.map(p => p.id) as ulong[]; }
	override getCompanyId() { return this.places?.[0]?.company as ulong; }
	override getResults() { return this.places as ContentIdDeleted[]; }
}