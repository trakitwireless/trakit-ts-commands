import { PayBehaviour } from "./PayBehaviour";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Behaviour"/>.
 **/
export class PayBehaviourGet extends PayBehaviour implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Behaviour"/> (if it exists).
	 **/
	includeDeleted: boolean;}