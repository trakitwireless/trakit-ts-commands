import { RepProviderRegistrationDelete } from "../Responses/RepProviderRegistrationDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderRegistration } from "./PayProviderRegistration";

/**
 * Deletes an existing {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationDelete extends PayProviderRegistration { 
	override createReply(json: any): Reply {
		return new RepProviderRegistrationDelete(json);
	}
}