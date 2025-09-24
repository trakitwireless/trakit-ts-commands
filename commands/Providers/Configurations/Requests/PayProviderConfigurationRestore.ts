import { PayProviderConfiguration } from "./PayProviderConfiguration";

/**
 * Restores a deleted {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationRestore extends PayProviderConfiguration { 
	override createReply(json: any): Reply {
		return new RepProviderConfigurationRestore(json);
	}
}