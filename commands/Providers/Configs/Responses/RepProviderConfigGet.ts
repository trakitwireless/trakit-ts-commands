import { JsonObject, nothing, ProviderConfig } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigGet extends ReplySyncGet<ProviderConfig> {
	/**
	 * The requested {@link ProviderConfig}.
	 **/
	providerConfig: ProviderConfig | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.providerConfig) {
			this.providerConfig = new ProviderConfig(json.providerConfig as JsonObject);
		}
	}
}