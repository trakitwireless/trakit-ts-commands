import { JsonObject, nothing, ProviderConfiguration, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerConfiguration}.
 */
export class RepProviderConfigurationGet extends ReplySyncGet<ProviderConfiguration> {
	/**
	 * The requested {@link ProviderConfiguration}.
	 */
	providerConfiguration: ProviderConfiguration | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfiguration");
		if (json?.providerConfiguration) {
			this.providerConfiguration = new ProviderConfiguration(json.providerConfiguration as JsonObject);
		}
	}
	override getObject() { return this.providerConfiguration as ProviderConfiguration; }
	override getCompanyId() { return this.providerConfiguration?.companyId as ulong; }
}