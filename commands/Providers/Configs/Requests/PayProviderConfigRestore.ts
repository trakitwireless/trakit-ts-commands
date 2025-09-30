import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigDelete } from "../Responses/RepProviderConfigDelete";
import { PayProviderConfig } from "./PayProviderConfig";

/**
 * Restores a deleted {@link ProviderConfig}.
 **/
export class PayProviderConfigRestore extends PayProviderConfig { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigDelete(json as JsonObject);
	}
}