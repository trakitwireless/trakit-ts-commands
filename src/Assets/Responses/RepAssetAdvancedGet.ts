import { Asset, AssetAdvanced, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetAdvanced}.
 */
export class RepAssetAdvancedGet extends ReplySyncGetPiece<AssetAdvanced> {
	/**
	 * The requested {@link AssetAdvanced}.
	 */
	assetAdvanced: AssetAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetAdvanced", 1);
		if (json?.assetAdvanced) {
			this.assetAdvanced = new AssetAdvanced(json.assetAdvanced as JsonObject);
		}
	}
	protected override _createBlank() { return new Asset(); }
	override getObject() { return this.assetAdvanced as AssetAdvanced; }
	override getCompanyId() { return this.assetAdvanced?.companyId as ulong; }
}