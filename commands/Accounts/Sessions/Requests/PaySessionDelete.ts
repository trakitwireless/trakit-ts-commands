import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepSessionDelete } from "../Responses/RepSessionDelete";
import { PaySessionGet } from "./PaySessionGet";

/**
 * Terminates a {@link Session} and forces the {@link User} to log back in.
 **/
export class PaySessionDelete extends PaySessionGet { 
	override createReply(json: JsonObject): Reply {
		return new RepSessionDelete(json);
	}
}