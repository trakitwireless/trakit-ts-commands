import { Asset, AssetDispatch, JsonObject, nothing } from "@trakit/objects";
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
		super(json, "AssetDispatch", 2);
		if (json?.assetDispatch) {
			this.assetDispatch = new AssetDispatch(json.assetDispatch as JsonObject);
		}
	}
	override getObject() { return this.assetDispatch as AssetDispatch; }
	protected override _createBlank() { return new Asset(); }
}