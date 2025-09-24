import { Reply } from "../../API/Responses/Reply";
import { PayAsset } from "./PayAsset";
import { RepAssetSuspend } from "../Responses/RepAssetSuspend";

/**
 * Reactivates a suspended {@link Asset}.
 **/
export class PayAssetReactivate extends PayAsset { 
	override createReply(json: any): Reply {
		return new RepAssetSuspend(json);
	}
}