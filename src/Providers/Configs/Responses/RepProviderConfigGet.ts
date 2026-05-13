import { JsonObject, nothing, ProviderConfig, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerConfig}.
 */
export class RepProviderConfigGet extends ReplySyncGet<ProviderConfig> {
	/**
	 * The requested {@link ProviderConfig}.
	 */
	providerConfig: ProviderConfig | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfig");
		if (json?.providerConfig) {
			this.providerConfig = new ProviderConfig(json.providerConfig as JsonObject);
		}
	}
	override getObject() { return this.providerConfig as ProviderConfig; }
	override getCompanyId() { return this.providerConfig?.companyId as ulong; }
}