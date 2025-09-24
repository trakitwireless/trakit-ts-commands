import { Reply } from "../../API/Responses/Reply";
import { RepAssetSuspend } from "../Responses/RepAssetSuspend";
import { PayAsset } from "./PayAsset";

/**
 * Suspends an existing {@link Asset}.
 **/
export class PayAssetSuspend extends PayAsset { 
	override createReply(json: any): Reply {
		return new RepAssetSuspend(json);
	}
}