import { AssetGeneral, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetGeneral}.
 **/
export class RepAssetGeneralGet extends Reply {
	/**
	 * The requested {@link Asset}.
	 **/
	assetGeneral: AssetGeneral | nothing;

	constructor(json?: any) {
		super(json);
		if (json?.assetGeneral) {
			this.assetGeneral = new AssetGeneral(json.assetGeneral);
		}
	}
}