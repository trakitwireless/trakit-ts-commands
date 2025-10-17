import { JsonObject } from "@trakit/objects";
import { RepProviderScriptDelete } from "../Responses/RepProviderScriptDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderScript } from "./PayProviderScript";

/**
 * Deletes an existing {@link ProviderScript}.
 **/
export class PayProviderScriptDelete extends PayProviderScript { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderScriptDelete(json);
	}
}