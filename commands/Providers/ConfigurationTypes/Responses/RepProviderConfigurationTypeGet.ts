import { JsonObject, nothing, ProviderConfigurationType } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerConfigurationType}.
 **/
export class RepProviderConfigurationTypeGet extends ReplySyncGet<ProviderConfigurationType> {
	/**
	 * The requested {@link ProviderConfigurationType}.
	 **/
	providerConfigurationType: ProviderConfigurationType | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfigurationType");
		if (json?.providerConfigurationType) {
			this.providerConfigurationType = new ProviderConfigurationType(json.providerConfigurationType as JsonObject);
		}
	}
	override getObject() { return this.providerConfigurationType as ProviderConfigurationType; }
}