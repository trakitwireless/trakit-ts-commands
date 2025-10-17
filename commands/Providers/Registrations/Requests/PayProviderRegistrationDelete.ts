import { JsonObject } from "@trakit/objects";
import { RepProviderRegistrationDelete } from "../Responses/RepProviderRegistrationDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderRegistration } from "./PayProviderRegistration";

/**
 * Deletes an existing {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationDelete extends PayProviderRegistration { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderRegistrationDelete(json);
	}
}