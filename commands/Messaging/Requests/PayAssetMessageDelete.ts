import { JsonObject } from "@trakit/objects";
import { RepAssetMessageDelete } from "../Responses/RepAssetMessageDelete";
import { Reply } from "../../API/Responses/Reply";
import { PayAssetMessage } from "./PayAssetMessage";

/**
 * Deletes an existing {@link AssetMessage}.
 **/
export class PayAssetMessageDelete extends PayAssetMessage { 
	override createReply(json: JsonObject): Reply {
		return new RepAssetMessageDelete(json as JsonObject);
	}
}