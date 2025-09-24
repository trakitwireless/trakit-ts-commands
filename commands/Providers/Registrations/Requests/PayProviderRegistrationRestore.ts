import { PayProviderRegistration } from "./PayProviderRegistration";

/**
 * Restores a deleted {@link ProviderRegistration}.
 **/
export class PayProviderRegistrationRestore extends PayProviderRegistration { 
	override createReply(json: any): Reply {
		return new RepProviderRegistrationRestore(json);
	}
}