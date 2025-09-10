import { AssetAdvanced } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetAdvanced}.
 **/
export class RepAssetAdvancedGet extends Reply {
	/**
	 * The requested {@link AssetAdvanced}.
	 **/
	assetAdvanced: AssetAdvanced;

	constructor(json?: any) {
		super(json);
		this.assetAdvanced = new AssetAdvanced(json?.assetAdvanced);
	}
}