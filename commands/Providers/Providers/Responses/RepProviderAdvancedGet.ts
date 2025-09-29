import { nothing, ProviderAdvanced } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerAdvanced}.
 **/
export class RepProviderAdvancedGet extends Reply {
	/**
	 * The requested {@link ProviderAdvanced}.
	 **/
	providerAdvanced: ProviderAdvanced | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerAdvanced = json?.providerAdvanced
			? new ProviderAdvanced(json.providerAdvanced)
			: null;
	}
}