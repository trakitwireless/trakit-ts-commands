import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserAdvancedGet } from "../Responses/RepUserAdvancedGet";
import { PayUser } from "./PayUser";

/**
 * Gets details of the specified {@link UserAdvanced}.
 **/
export class PayUserAdvancedGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
	}

	override createReply(json: any): Reply {
		return new RepUserAdvancedGet(json);
	}
}