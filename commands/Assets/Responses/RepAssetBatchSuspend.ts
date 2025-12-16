import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";

/**
 * 
 */
export class RepAssetBatchSuspend extends ReplySyncBatchDelete {
	/**
	 * 
	 */
	assets: ContentIdSuspended[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Asset");
		this.assets = (json?.assets as JsonObject[])?.map((a: any) => new ContentIdSuspended(a));
	}
	
	protected override _getKeys() { return this.assets?.map(a => a.id) as ulong[]; }
	override getCompanyId() { return this.assets?.[0]?.company as ulong; }
	override getResults() { return this.assets as ContentIdSuspended[]; }
}