import { PayProvider } from "./PayProvider";

/**
 * Restores a deleted {@link Provider}.
 **/
export class PayProviderRestore extends PayProvider { 
	override createReply(json: any): Reply {
		return new RepProviderRestore(json);
	}
}