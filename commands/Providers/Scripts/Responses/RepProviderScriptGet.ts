import { nothing, ProviderScript } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptGet extends Reply {
	/**
	 * The requested {@link ProviderScript}.
	 **/
	providerScript: ProviderScript | nothing;
	
	constructor(json: any) {
		super(json);
		this.providerScript = json?.providerScript
			? new ProviderScript(json.providerScript)
			: null;
	}
}