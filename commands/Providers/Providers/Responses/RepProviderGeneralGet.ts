import { JsonObject } from "@trakit/objects";
import { nothing, ProviderGeneral } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerGeneral}.
 **/
export class RepProviderGeneralGet extends ReplySyncGet<ProviderGeneral> {
	/**
	 * The requested {@link Provider}.
	 **/
	providerGeneral: ProviderGeneral | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.providerGeneral) {
			this.providerGeneral = new ProviderGeneral(json.providerGeneral as JsonObject);
		}
	}
}