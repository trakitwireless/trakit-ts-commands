import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetSuspend } from "../Responses/RepAssetSuspend";
import { PayAsset } from "./PayAsset";

/**
 * Reactivates a suspended {@link Asset}.
 **/
export class PayAssetReactivate extends PayAsset { 
	override createReply(json: JsonObject): Reply {
		return new RepAssetSuspend(json as JsonObject);
	}
}