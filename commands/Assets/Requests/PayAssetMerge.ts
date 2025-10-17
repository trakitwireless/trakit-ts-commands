import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetMerge } from "../Responses/RepAssetMerge";
import { ParamAssetMerge } from "./Parameters/ParamAssetMerge";

/**
 * Container for the command to creates a new, or updates an existing {@link Asset}.
 **/
export class PayAssetMerge extends Payload {
	/**
	 * Parameters given to create or update an {@link Asset}.
	 **/
	asset: ParamAssetMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamAssetMerge(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepAssetMerge(json);
	}
}