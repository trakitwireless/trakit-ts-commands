import { Reply } from "../../../API/Responses/Reply";
import { PayBehaviour } from "./PayBehaviour";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepBehaviourGet } from "../Responses/RepBehaviourGet";

/**
 * Gets details of the specified {@link Behaviour}.
 **/
export class PayBehaviourGet extends PayBehaviour implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Behaviour} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepBehaviourGet(json);
	}
}