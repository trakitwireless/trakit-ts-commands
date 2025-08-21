import { PayContact } from "./PayContact";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Contact"/>.
 **/
export class PayContactGet extends PayContact implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Contact"/> (if it exists).
	 **/
	includeDeleted: boolean;}