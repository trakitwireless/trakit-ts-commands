import { Reply } from "../../API/Responses/Reply";
import { PayContact } from "./PayContact";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepContactGet } from "../Responses/RepContactGet";

/**
 * Gets details of the specified {@link Contact}.
 **/
export class PayContactGet extends PayContact implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Contact} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepContactGet(json);
	}
}