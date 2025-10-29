import { Asset, AssetGeneral, classes, JsonObject, nothing, storage } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetGeneral}.
 **/
export class RepAssetGeneralGet extends ReplySyncGet<AssetGeneral> {
	
	/**
	 * The requested {@link Asset}.
	 **/
	assetGeneral: AssetGeneral | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetGeneral) {
			this.assetGeneral = AssetGeneral.fromJSON(json.assetGeneral as JsonObject);
		}
	}

	override getObject() { return this.assetGeneral as AssetGeneral; }
	protected override _getTypeName(): classes { return "AssetGeneral"; }

	override store(): void {
		const map = storage[this._getTypeName()],
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as unknown as Asset;
		if (!stored) {
			map.set(key, Asset.fromJSON(this._json));
		} else {
			if (stored.kind !== obj.kind) {
				//kind has changed, we need to replace the object
				const asset = Asset.fromJSON(this._json);
				asset.fromJSON(stored.toJSON());
				map.set(key, asset);
			} else {
				stored.fromJSON(this._json);
			}
		}
	}
}