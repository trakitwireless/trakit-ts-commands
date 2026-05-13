import { AssetAdvanced, JsonObject, nothing } from "@trakit/objects";
import { ReplyAudit } from "../../API/Responses/ReplyAudit";

/**
 * A container for the {@link assetAdvanced}.
 */
export class RepAssetAdvancedAudit extends ReplyAudit<AssetAdvanced> {
	/**
	 * The requested {@link AssetAdvanced}.
	 */
	assetAdvanceds: AssetAdvanced[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetAdvanceds) {
			this.assetAdvanceds = (json.assetAdvanceds as JsonObject[]).map(obj => new AssetAdvanced(obj));
		}
	}

	getList(): AssetAdvanced[] {
		return this.assetAdvanceds ?? [];
	}
}