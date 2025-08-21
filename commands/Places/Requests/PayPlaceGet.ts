import { PayPlace } from "./PayPlace";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Place"/>.

 **/
export class PayPlaceGet extends PayPlace implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Place"/> (if it exists).

	 **/
	includeDeleted: boolean;}