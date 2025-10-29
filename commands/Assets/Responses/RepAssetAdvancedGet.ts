import { Asset, AssetAdvanced, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetAdvanced}.
 **/
export class RepAssetAdvancedGet extends ReplySyncGet<AssetAdvanced> {
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
	protected override _getStorage() { return storage.Asset as Map<ulong, Asset>; }

	override store(): void {
		const map = this._getStorage(),
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as Asset || new Asset;
		stored.pieces[1].fromJSON(obj.toJSON());
		map.set(key, stored);
	}
}