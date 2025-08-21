import { PayDispatchTask } from "./PayDispatchTask";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="DispatchTask"/>.
 **/
export class PayDispatchTaskGet extends PayDispatchTask implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="DispatchTask"/> (if it exists).
	 **/
	includeDeleted: boolean;}