import { PayContact } from "./PayContact";

/**
 * Restores a deleted {@link Contact}.
 **/
export class PayContactRestore extends PayContact { 
	override createReply(json: any): Reply {
		return new RepContactRestore(json);
	}
}