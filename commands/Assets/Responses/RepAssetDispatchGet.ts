import { Asset, AssetDispatch, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link assetDispatch}.
 **/
export class RepAssetDispatchGet extends ReplySyncGet<AssetDispatch> {
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
	protected override _getStorage() { return storage.Asset as Map<ulong, Asset>; }

	override store(): void {
		const map = this._getStorage(),
			obj = this.getObject(),
			key = obj.getKey(),
			stored = map.get(key) as Asset || new Asset;
		stored.pieces[2].fromJSON(obj.toJSON());
		map.set(key, stored);
	}
}