import { JsonObject, ulong } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link assetMessage}.
 */
export class RepAssetMessageDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link AssetMessage}.
	 */
	assetMessage: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetMessage");
		this.assetMessage = ContentIdDeleted.fromJSON(json?.assetMessage as JsonObject);
	}
	override getKey() { return this.assetMessage?.id as ulong; }
	override getCompanyId() { return this.assetMessage?.company as ulong; }
}