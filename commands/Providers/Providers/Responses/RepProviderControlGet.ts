import { JsonObject } from "@trakit/objects";
import { nothing, ProviderControl } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerControl}.
 **/
export class RepProviderControlGet extends Reply {
	/**
	 * The requested {@link ProviderControl}.
	 **/
	providerControl: ProviderControl | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.providerControl) {
			this.providerControl = new ProviderControl(json.providerControl as JsonObject);
		}
	}
}