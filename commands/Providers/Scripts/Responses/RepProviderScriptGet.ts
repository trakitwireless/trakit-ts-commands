import { JsonObject, nothing, ProviderScript } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptGet extends ReplySyncGet<ProviderScript> {
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