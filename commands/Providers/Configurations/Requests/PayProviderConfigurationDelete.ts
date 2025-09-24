import { PayProviderConfiguration } from "./PayProviderConfiguration";

/**
 * Deletes an existing {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationDelete extends PayProviderConfiguration { 
	override createReply(json: any): Reply {
		return new RepProviderConfigurationDelete(json);
	}
}