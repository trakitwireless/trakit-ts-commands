import { JsonObject, nothing, ProviderScript } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptGet extends Reply {
	/**
	 * The requested {@link ProviderScript}.
	 **/
	providerScript: ProviderScript | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		if (json?.providerScript) {
			this.providerScript = new ProviderScript(json.providerScript as JsonObject);
		}
	}
}