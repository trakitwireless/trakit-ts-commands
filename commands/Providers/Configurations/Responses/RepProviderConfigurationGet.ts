import { JsonObject, nothing, ProviderConfiguration } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerConfiguration}.
 **/
export class RepProviderConfigurationGet extends ReplySyncGet<ProviderConfiguration> {
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