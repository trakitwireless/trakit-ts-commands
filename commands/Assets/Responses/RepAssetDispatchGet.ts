import { AssetDispatch, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link assetDispatch}.
 **/
export class RepAssetDispatchGet extends Reply {
	/**
	 * The requested {@link AssetDispatch}.
	 **/
	assetDispatch: AssetDispatch | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.assetDispatch) {
			this.assetDispatch = new AssetDispatch(json.assetDispatch);
		}
	}
}