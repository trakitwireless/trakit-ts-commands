import { PayBehaviourScript } from "./PayBehaviourScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link BehaviourScript}.
 **/
export class PayBehaviourScriptGet extends PayBehaviourScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link BehaviourScript} (if it exists).
	 **/
	includeDeleted: boolean;}