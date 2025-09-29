import { Reply } from "../../../API/Responses/Reply";
import { RepProviderScriptDelete } from "../Responses/RepProviderScriptDelete";
import { PayProviderScript } from "./PayProviderScript";

/**
 * Restores a deleted {@link ProviderScript}.
 **/
export class PayProviderScriptRestore extends PayProviderScript { 
	override createReply(json?: JsonObject): Reply {
		return new RepProviderScriptDelete(json);
	}
}