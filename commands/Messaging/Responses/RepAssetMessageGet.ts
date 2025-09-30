import { JsonObject } from "@trakit/objects";
import { AssetMessage, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetMessage}.
 **/
export class RepAssetMessageGet extends Reply {
	/**
	 * The requested {@link AssetMessage}.
	 **/
	assetMessage: AssetMessage | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetMessage) {
			this.assetMessage = new AssetMessage(json.assetMessage as JsonObject);
		}
	}
}