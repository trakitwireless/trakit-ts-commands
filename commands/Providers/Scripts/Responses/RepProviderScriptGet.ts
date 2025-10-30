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
		super(json, "ProviderScript");
		if (json?.providerScript) {
			this.providerScript = new ProviderScript(json.providerScript as JsonObject);
		}
	}
	override getObject() { return this.providerScript as ProviderScript; }
}