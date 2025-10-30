import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";

/**
 * 
 **/
export class RepAssetBatchDelete extends ReplySyncBatchDelete {
	/**
	 * 
	 **/
	assets: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Asset");
		this.assets = (json?.assets as JsonObject[])?.map((a: any) => new ContentIdDeleted(a));
	}
	protected override _getKeys() { return this.assets?.map((e) => e.id) as ulong[]; }
}