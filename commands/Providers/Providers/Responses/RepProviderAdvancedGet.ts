import { JsonObject } from "@trakit/objects";
import { nothing, ProviderAdvanced } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerAdvanced}.
 **/
export class RepProviderAdvancedGet extends ReplySyncGet<ProviderAdvanced> {
	/**
	 * The requested {@link ProviderAdvanced}.
	 **/
	providerAdvanced: ProviderAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.providerAdvanced) {
			this.providerAdvanced = new ProviderAdvanced(json.providerAdvanced as JsonObject)
		}
	}
}