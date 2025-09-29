import { AssetAdvanced, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetAdvanced}.
 **/
export class RepAssetAdvancedGet extends Reply {
	/**
	 * The requested {@link AssetAdvanced}.
	 **/
	assetAdvanced: AssetAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetAdvanced) {
			this.assetAdvanced = new AssetAdvanced(json?.assetAdvanced);
		}
	}
}