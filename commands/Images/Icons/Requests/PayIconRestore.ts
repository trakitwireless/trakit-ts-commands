import { Reply } from "../../../API/Responses/Reply";
import { RepIconDelete } from "../Responses/RepIconDelete";
import { PayIcon } from "./PayIcon";

/**
 * Restores a deleted {@link Icon}.
 **/
export class PayIconRestore extends PayIcon { 
	override createReply(json: any): Reply {
		return new RepIconDelete(json);
	}
}