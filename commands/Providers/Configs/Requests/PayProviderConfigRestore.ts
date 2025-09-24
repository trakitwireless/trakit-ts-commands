import { PayProviderConfig } from "./PayProviderConfig";

/**
 * Restores a deleted {@link ProviderConfig}.
 **/
export class PayProviderConfigRestore extends PayProviderConfig { 
	override createReply(json: any): Reply {
		return new RepProviderConfigRestore(json);
	}
}