import { Reply } from "../../API/Responses/Reply";
import { RepAssetMessageDelete } from "../Responses/RepAssetMessageDelete";
import { PayAssetMessage } from "./PayAssetMessage";

/**
 * Restores a deleted {@link AssetMessage}.
 **/
export class PayAssetMessageRestore extends PayAssetMessage { 
	override createReply(json: any): Reply {
		return new RepAssetMessageDelete(json);
	}
}