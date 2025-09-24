import { PayContact } from "./PayContact";

/**
 * Deletes an existing {@link Contact}.
 **/
export class PayContactDelete extends PayContact { 
	override createReply(json: any): Reply {
		return new RepContactDelete(json);
	}
}