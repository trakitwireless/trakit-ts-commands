import { Asset, classes, JsonObject, nothing, storage } from "@trakit/objects";
import { ReplyGet } from "../../API/Responses/ReplyGet";

/**
 * A container for the {@link asset}.
 **/
export class RepAssetGet extends ReplyGet<Asset> {
	/**
	 * The requested {@link Asset}.
	 **/
	asset: Asset | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.asset) {
			this.asset = Asset.fromJSON(json.asset as JsonObject);
		}
	}
	override getObject() { return this.asset as Asset; }
	protected override _getTypeName(): classes { return "Asset"; }

	override store(): void {
		const map = storage[this._getTypeName()],
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as unknown as Asset;
		if (!stored) {
			map.set(key, obj);
		} else {
			if (stored.kind !== obj.kind) {
				//kind has changed, we need to replace the object
				obj.fromJSON(stored.toJSON());
				map.set(key, obj);
			} else {
				stored.fromJSON(this._json);
			}
		}
	}
}