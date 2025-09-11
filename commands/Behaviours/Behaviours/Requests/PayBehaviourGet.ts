import { PayBehaviour } from "./PayBehaviour";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

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
}