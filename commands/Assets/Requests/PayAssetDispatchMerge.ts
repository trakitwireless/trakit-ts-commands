import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetDispatchMerge } from "../Responses/RepAssetDispatchMerge";
import { ParamAssetDispatchMerge } from "./Parameters/ParamAssetDispatchMerge";

/**
 * Container for the command to creates a new, or updates an existing {@link Asset}.
 */
export class PayAssetDispatchMerge extends Payload {
	/**
	 * Parameters given to update an {@link AssetDispatch}.
	 */
	asset: ParamAssetDispatchMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamAssetDispatchMerge(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetDispatchMerge(json);
	}
}