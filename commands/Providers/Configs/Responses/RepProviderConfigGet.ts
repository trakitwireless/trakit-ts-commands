import { nothing, ProviderConfig } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigGet extends Reply {
	/**
	 * The requested {@link ProviderConfig}.
	 **/
	providerConfig: ProviderConfig | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfig = json?.providerConfig
			? new ProviderConfig(json.providerConfig)
			: null;
	}
}