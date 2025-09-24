import { Reply } from "../../../API/Responses/Reply";
import { RepSessionDelete } from "../Responses/RepSessionDelete";
import { PaySessionGet } from "./PaySessionGet";

/**
 * Terminates a {@link Session} and forces the {@link User} to log back in.
 **/
export class PaySessionDelete extends PaySessionGet { 
	override createReply(json: any): Reply {
		return new RepSessionDelete(json);
	}
}