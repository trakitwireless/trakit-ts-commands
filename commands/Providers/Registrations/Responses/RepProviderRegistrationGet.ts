import { JsonObject } from "@trakit/objects";
import { nothing, ProviderRegistration } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerRegistration}.
 **/
export class RepProviderRegistrationGet extends ReplySyncGet<ProviderRegistration> {
	/**
	 * The requested {@link ProviderRegistration}.
	 **/
	providerRegistration: ProviderRegistration | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderRegistration");
		if (json?.providerRegistration) {
			this.providerRegistration = new ProviderRegistration(json.providerRegistration as JsonObject);
		}
	}
	override getObject() { return this.providerRegistration as ProviderRegistration; }
}