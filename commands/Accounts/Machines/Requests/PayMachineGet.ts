import { PayMachine } from "./PayMachine";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Machine"/>.
 **/
export class PayMachineGet extends PayMachine implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Machine"/> (if it exists).
	 **/
	includeDeleted: boolean;}