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
		this.assetMessage = json?.assetMessage
			? new AssetMessage(json.assetMessage)
			: null;
	}
}