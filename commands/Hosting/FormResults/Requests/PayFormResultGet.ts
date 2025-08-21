import { PayFormResult } from "./PayFormResult";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="FormResult"/>.

 **/
export class PayFormResultGet extends PayFormResult implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="FormResult"/> (if it exists).

	 **/
	includeDeleted: boolean;}