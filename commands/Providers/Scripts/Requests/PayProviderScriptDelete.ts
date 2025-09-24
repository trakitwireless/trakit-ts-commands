import { PayProviderScript } from "./PayProviderScript";

/**
 * Deletes an existing {@link ProviderScript}.
 **/
export class PayProviderScriptDelete extends PayProviderScript { 
	override createReply(json: any): Reply {
		return new RepProviderScriptDelete(json);
	}
}