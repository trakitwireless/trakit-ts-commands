import { PayProviderScript } from "./PayProviderScript";

/**
 * Restores a deleted {@link ProviderScript}.
 **/
export class PayProviderScriptRestore extends PayProviderScript { 
	override createReply(json: any): Reply {
		return new RepProviderScriptRestore(json);
	}
}