import { Reply } from "../../API/Responses/Reply";
import { RepAssetDelete } from "../Responses/RepAssetDelete";
import { PayAsset } from "./PayAsset";

/**
 * Deletes an existing {@link Asset}.
 **/
export class PayAssetDelete extends PayAsset { 
	override createReply(json: any): Reply {
		return new RepAssetDelete(json);
	}
}