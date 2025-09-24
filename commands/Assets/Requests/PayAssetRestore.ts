import { Reply } from "../../API/Responses/Reply";
import { RepAssetDelete } from "../Responses/RepAssetDelete";
import { PayAsset } from "./PayAsset";

/**
 * Restores a deleted {@link Asset}.
 **/
export class PayAssetRestore extends PayAsset { 
	override createReply(json: any): Reply {
		return new RepAssetDelete(json);
	}
}