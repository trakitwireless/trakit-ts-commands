import { PayMachine } from "./PayMachine";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link Machine}.
 **/
export class PayMachineGet extends PayMachine implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Machine} (if it exists).
	 **/
	includeDeleted: boolean;}