import { PayProviderRegistration } from "./PayProviderRegistration";

/**
 * Deletes an existing {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationDelete extends PayProviderRegistration { 
	override createReply(json: any): Reply {
		return new RepProviderRegistrationDelete(json);
	}
}