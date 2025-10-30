import { Asset, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link asset}.
 **/
export class RepAssetGet extends ReplySyncGet<Asset> {
	/**
	 * The requested {@link Asset}.
	 **/
	asset: Asset | nothing;

	constructor(json: JsonObject) {
		super(json, "Asset");
		if (json?.asset) {
			this.asset = new Asset(json.asset as JsonObject);
		}
	}
	override getObject() { return this.asset as Asset; }
}