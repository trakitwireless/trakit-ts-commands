import { Asset, codified, email, guid, IDeserializable, IRequestable, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ContentIdSuspended } from "../../API/Responses/Content/ContentIdSuspended";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * 
 */
export class RepAssetSuspend extends ReplySyncGet<Asset> {
	/**
	 * 
	 */
	asset: ContentIdSuspended | nothing;

	constructor(json: JsonObject) {
		super(json, "Asset");
		this.asset = ContentIdSuspended.fromJSON(json?.asset as JsonObject);
	}
	override getObject() { return storage[this.syncName].get(this.asset?.id as ulong) as Asset; }
	override getCompanyId() { return this.asset?.company as ulong; }
	override store(): boolean {
		const map = storage[this.syncName] as Map<ulong | guid | email | codified | string, IRequestable>,
			obj = (this.asset as ContentIdSuspended).toJSON(),
			stored = map.get((this.asset as ContentIdSuspended).id as ulong) as unknown as IDeserializable;
		return stored?.fromJSON(obj) ?? false;
	}
}