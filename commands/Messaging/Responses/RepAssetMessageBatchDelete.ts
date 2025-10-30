import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link AssetMessage}.
	 **/
	assetMessages: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetMessage");
		this.assetMessages = (json?.assetMessages as JsonObject[])?.map((v: any) => new ContentIdDeleted(v));
	}
	protected override _getKeys() { return this.assetMessages?.map(a => a.id) as ulong[]; }
}