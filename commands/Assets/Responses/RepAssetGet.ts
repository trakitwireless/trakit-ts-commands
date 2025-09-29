import { Asset, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link asset}.
 **/
export class RepAssetGet extends Reply {
	/**
	 * The requested {@link Asset}.
	 **/
	asset: Asset | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.asset) {
			this.asset = new Asset(json.asset);
		}
	}
}