import { PayBehaviourScript } from "./PayBehaviourScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="BehaviourScript"/>.
 **/
export class PayBehaviourScriptGet extends PayBehaviourScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="BehaviourScript"/> (if it exists).
	 **/
	includeDeleted: boolean;}