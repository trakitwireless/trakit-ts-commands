import { Asset, AssetAdvanced, AssetType, classes, int, JsonObject, nothing, storage, VehicleAdvanced } from "@trakit/objects";
import { ReplyGet } from "../../API/Responses/ReplyGet";

/**
 * A container for the {@link assetAdvanced}.
 **/
export class RepAssetAdvancedGet extends ReplyGet<AssetAdvanced> {
	/**
	 * The requested {@link AssetAdvanced}.
	 **/
	assetAdvanced: AssetAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetAdvanced) {
			this.assetAdvanced = AssetAdvanced.fromJSON(json.assetAdvanced as JsonObject);
		}
	}

	override getObject() { return this.assetAdvanced as AssetAdvanced; }
	protected override _getTypeName(): classes { return "AssetAdvanced"; }

	override store(): void {
		const map = storage[this._getTypeName()],
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as unknown as Asset;
		if (!stored) {
			map.set(key, Asset.fromJSON(this._json));
		} else {
			if (stored.kind !== AssetType.vehicle && !isNaN((obj as VehicleAdvanced).engineHours)) {
				//kind has changed, we need to replace the object
				const asset = stored.toJSON();
				map.set(key, new VehicleAdvanced({
					...asset,
					...this._json,
					"v": [asset.v[0], (this._json["v"] as int[])[0], asset.v[2]]
				}));
			} else {
				stored.fromJSON(this._json);
			}
		}
	}
}