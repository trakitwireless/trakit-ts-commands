import { Reply } from "../../../API/Responses/Reply";
import { PayFormResult } from "./PayFormResult";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepFormResultGet } from "../Responses/RepFormResultGet";

/**
 * Gets details of the specified {@link FormResult}.
 */
export class PayFormResultGet extends PayFormResult implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link FormResult} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
	}

	override createReply(json: any): Reply {
		return new RepFormResultGet(json);
	}
}