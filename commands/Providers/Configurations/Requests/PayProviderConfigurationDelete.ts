import { JsonObject } from "@trakit/objects";
import { RepProviderConfigurationDelete } from "../Responses/RepProviderConfigurationDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfiguration } from "./PayProviderConfiguration";

/**
 * Deletes an existing {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationDelete extends PayProviderConfiguration { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationDelete(json);
	}
}