import { Asset, AssetAdvanced, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetAdvanced}.
 **/
export class RepAssetAdvancedGet extends ReplySyncGetPiece<AssetAdvanced> {
	/**
	 * The requested {@link AssetAdvanced}.
	 **/
	assetAdvanced: AssetAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetAdvanced", 1);
		if (json?.assetAdvanced) {
			this.assetAdvanced = new AssetAdvanced(json.assetAdvanced as JsonObject);
		}
	}
	override getObject() { return this.assetAdvanced as AssetAdvanced; }
	protected override _createBlank() { return new Asset(); }
}