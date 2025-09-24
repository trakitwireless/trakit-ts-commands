import { PayIcon } from "./PayIcon";

/**
 * Restores a deleted {@link Icon}.
 **/
export class PayIconRestore extends PayIcon { 
	override createReply(json: any): Reply {
		return new RepIconRestore(json);
	}
}