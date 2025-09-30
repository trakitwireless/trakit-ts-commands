import { JsonObject } from "@trakit/objects";
import { nothing, Provider } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderGet extends Reply {
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