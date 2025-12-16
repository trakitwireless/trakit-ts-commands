import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetMessageDelete } from "../Responses/RepAssetMessageDelete";
import { PayAssetMessage } from "./PayAssetMessage";

/**
 * Restores a deleted {@link AssetMessage}.
 */
export class PayAssetMessageRestore extends PayAssetMessage { 
	override createReply(json: JsonObject): Reply {
		return new RepAssetMessageDelete(json);
	}
}