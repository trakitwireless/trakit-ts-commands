import { Asset, AssetDispatch, classes, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetDispatch}.
 **/
export class RepAssetDispatchGet extends ReplySyncGetPiece<AssetDispatch> {
	/**
	 * The requested {@link AssetDispatch}.
	 **/
	assetDispatch: AssetDispatch | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetDispatch) {
			this.assetDispatch = new AssetDispatch(json.assetDispatch as JsonObject);
		}
	}
	override getObject() { return this.assetDispatch as AssetDispatch; }
	protected override _getTypeName(): classes { return "AssetDispatch"; }
	protected override _getPieceIndex() { return 2; }
	protected override _createBlank() { return new Asset(); }
}