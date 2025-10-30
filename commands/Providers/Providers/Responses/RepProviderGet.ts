import { JsonObject } from "@trakit/objects";
import { nothing, Provider } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderGet extends ReplySyncGet<Provider> {
	/**
	 * The requested {@link Provider}.
	 **/
	provider: Provider | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.provider) {
			this.provider = new Provider(json.provider as JsonObject);
		}
	}
}