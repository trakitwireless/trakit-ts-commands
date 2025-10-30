import { JsonObject } from "@trakit/objects";
import { nothing, ProviderControl } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerControl}.
 **/
export class RepProviderControlGet extends ReplySyncGet<ProviderControl> {
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