import { JsonObject } from "@trakit/objects";
import { RepIconDelete } from "../Responses/RepIconDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayIcon } from "./PayIcon";

/**
 * Deletes an existing {@link Icon}.
 **/
export class PayIconDelete extends PayIcon { 
	override createReply(json: JsonObject): Reply {
		return new RepIconDelete(json as JsonObject);
	}
}