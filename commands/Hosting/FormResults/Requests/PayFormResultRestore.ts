import { PayFormResult } from "./PayFormResult";

/**
 * Restores a deleted {@link FormResult}.
 */
export class PayFormResultRestore extends PayFormResult { 
	override createReply(json: any): Reply {
		return new RepFormResultRestore(json);
	}
}