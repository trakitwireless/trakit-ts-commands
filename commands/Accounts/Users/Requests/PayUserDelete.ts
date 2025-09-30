import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserDelete } from "../Responses/RepUserDelete";
import { PayUser } from "./PayUser";

/**
 * Deletes an existing {@link User}.
 **/
export class PayUserDelete extends PayUser { 
	override createReply(json: JsonObject): Reply {
		return new RepUserDelete(json as JsonObject);
	}
}