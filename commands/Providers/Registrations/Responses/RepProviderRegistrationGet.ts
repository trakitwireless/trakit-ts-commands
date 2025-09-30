import { JsonObject } from "@trakit/objects";
import { nothing, ProviderRegistration } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationGet extends Reply {
	/**
	 * The requested {@link ProviderRegistration}.
	 **/
	providerRegistration: ProviderRegistration | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerRegistration = json?.providerRegistration
			? new ProviderRegistration(json.providerRegistration)
			: null;
	}
}