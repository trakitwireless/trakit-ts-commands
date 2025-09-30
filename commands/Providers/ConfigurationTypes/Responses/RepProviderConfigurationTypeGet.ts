import { JsonObject, nothing, ProviderConfigurationType } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfigurationType}.
 **/
export class RepProviderConfigurationTypeGet extends Reply {
	/**
	 * The requested {@link ProviderConfigurationType}.
	 **/
	providerConfigurationType: ProviderConfigurationType | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.providerConfigurationType) {
			this.providerConfigurationType = new ProviderConfigurationType(json.providerConfigurationType as JsonObject);
		}
	}
}