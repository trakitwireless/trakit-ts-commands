import { PayIcon } from "./PayIcon";

/**
 * Deletes an existing {@link Icon}.
 **/
export class PayIconDelete extends PayIcon { 
	override createReply(json: any): Reply {
		return new RepIconDelete(json);
	}
}