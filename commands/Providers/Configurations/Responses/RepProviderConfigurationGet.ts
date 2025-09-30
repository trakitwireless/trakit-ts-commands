import { JsonObject, nothing, ProviderConfiguration } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfiguration}.
 **/
export class RepProviderConfigurationGet extends Reply {
	/**
	 * The requested {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ProviderConfiguration | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.providerConfiguration) {
			this.providerConfiguration = new ProviderConfiguration(json.providerConfiguration as JsonObject);
		}
	}
}