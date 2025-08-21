import { PayUser } from "./PayUser";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="User"/>.
 **/
export class PayUserGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="User"/> (if it exists).
	 **/
	includeDeleted: boolean;}