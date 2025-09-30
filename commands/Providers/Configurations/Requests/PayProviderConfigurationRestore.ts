import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationDelete } from "../Responses/RepProviderConfigurationDelete";
import { PayProviderConfiguration } from "./PayProviderConfiguration";

/**
 * Restores a deleted {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationRestore extends PayProviderConfiguration { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationDelete(json as JsonObject);
	}
}