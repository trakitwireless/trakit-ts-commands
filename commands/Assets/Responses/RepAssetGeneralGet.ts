import {
	Asset,
	AssetGeneral,
	JsonObject,
	nothing
} from "@trakit/objects";
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
		super(json, "AssetGeneral", 0);
		if (json?.assetGeneral) {
			this.assetGeneral = new AssetGeneral(json.assetGeneral as JsonObject);
		}
	}

	override getObject() { return this.assetGeneral as AssetGeneral; }
	protected override _createBlank() { return new Asset(); }
}