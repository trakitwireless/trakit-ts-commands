import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderDelete } from "../Responses/RepProviderDelete";
import { PayProvider } from "./PayProvider";

/**
 * Deletes an existing {@link Provider}.
 **/
export class PayProviderDelete extends PayProvider { 
	override createReply(json: JsonObject): Reply {
		return new RepProviderDelete(json);
	}
}