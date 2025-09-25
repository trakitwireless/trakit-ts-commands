import { Reply } from "../../../API/Responses/Reply";
import { RepProviderDelete } from "../Responses/RepProviderDelete";
import { PayProvider } from "./PayProvider";

/**
 * Restores a deleted {@link Provider}.
 **/
export class PayProviderRestore extends PayProvider { 
	override createReply(json: any): Reply {
		return new RepProviderDelete(json);
	}
}