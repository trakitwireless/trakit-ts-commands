import { Asset, AssetAdvanced, BaseCompound, classes, JsonObject, nothing } from "@trakit/objects";
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
		super(json);
		if (json?.assetAdvanced) {
			this.assetAdvanced = new AssetAdvanced(json.assetAdvanced as JsonObject);
		}
	}

	override getObject() { return this.assetAdvanced as AssetAdvanced; }
	protected override _getTypeName(): classes { return "AssetAdvanced"; }
	protected override _getPieceIndex(): number { return 1; }
	protected override _createBlank() { return new Asset(); }
}