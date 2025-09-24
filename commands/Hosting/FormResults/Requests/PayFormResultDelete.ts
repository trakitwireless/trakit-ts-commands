import { PayFormResult } from "./PayFormResult";

/**
 * Deletes an existing {@link FormResult}.
 */
export class PayFormResultDelete extends PayFormResult { 
	override createReply(json: any): Reply {
		return new RepFormResultDelete(json);
	}
}