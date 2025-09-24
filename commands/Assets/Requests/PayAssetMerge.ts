import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
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

	constructor(json?: any) {
		super(json);
		this.asset = new ParamAssetMerge(json?.asset);
	}

	override createReply(json: any): Reply {
		return new RepAssetMerge(json);
	}
}