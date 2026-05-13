import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderRegistrationDelete } from "../Responses/RepProviderRegistrationDelete";
import { PayProviderRegistration } from "./PayProviderRegistration";

/**
 * Restores a deleted {@link ProviderRegistration}.
 */
export class PayProviderRegistrationRestore extends PayProviderRegistration { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderRegistrationDelete(json);
	}
}