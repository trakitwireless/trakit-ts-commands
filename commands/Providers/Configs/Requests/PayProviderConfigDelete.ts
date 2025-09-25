import { RepProviderConfigDelete } from "../Responses/RepProviderConfigDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfig } from "./PayProviderConfig";

/**
 * Deletes an existing {@link ProviderConfig}.
 **/
export class PayProviderConfigDelete extends PayProviderConfig { 
	override createReply(json: any): Reply {
		return new RepProviderConfigDelete(json);
	}
}