import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigDelete } from "../Responses/RepProviderConfigDelete";
import { PayProviderConfig } from "./PayProviderConfig";

/**
 * Deletes an existing {@link ProviderConfig}.
 **/
export class PayProviderConfigDelete extends PayProviderConfig { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigDelete(json);
	}
}