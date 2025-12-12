import { JsonObject, ulong } from "@trakit/objects";
import { AssetMessage, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageGet extends ReplySyncGet<AssetMessage> {
	/**
	 * The requested {@link AssetMessage}.
	 **/
	assetMessage: AssetMessage | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetMessage");
		if (json?.assetMessage) {
			this.assetMessage = new AssetMessage(json.assetMessage as JsonObject);
		}
	}
	override getObject() { return this.assetMessage as AssetMessage; }
	override getCompanyId() { return this.assetMessage?.companyId as ulong; }
}