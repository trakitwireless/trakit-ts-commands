import { PayProvider } from "./PayProvider";

/**
 * Deletes an existing {@link Provider}.
 **/
export class PayProviderDelete extends PayProvider { 
	override createReply(json: any): Reply {
		return new RepProviderDelete(json);
	}
}