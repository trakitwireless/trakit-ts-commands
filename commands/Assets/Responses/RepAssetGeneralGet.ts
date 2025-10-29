import { Asset, AssetGeneral, classes, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetGeneral}.
 **/
export class RepAssetGeneralGet extends ReplySyncGetPiece<AssetGeneral> {
	
	/**
	 * The requested {@link Asset}.
	 **/
	assetGeneral: AssetGeneral | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetGeneral) {
			this.assetGeneral = new AssetGeneral(json.assetGeneral as JsonObject);
		}
	}

	override getObject() { return this.assetGeneral as AssetGeneral; }
	protected override _getTypeName(): classes { return "AssetGeneral"; }
	protected override _getPieceIndex(): number { return 0; }
	protected override _createBlank() { return new Asset(); }
}