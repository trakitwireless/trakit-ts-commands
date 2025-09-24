import { Reply } from "../../../API/Responses/Reply";
import { PayUser } from "./PayUser";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepUserGet } from "../Responses/RepUserGet";

/**
 * Gets details of the specified {@link User}.
 **/
export class PayUserGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link User} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}

	override createReply(json: any): Reply {
		return new RepUserGet(json);
	}
}