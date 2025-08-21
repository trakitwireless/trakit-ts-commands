import { PayPlace } from "./PayPlace";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link Place}.

 **/
export class PayPlaceGet extends PayPlace implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Place} (if it exists).

	 **/
	includeDeleted: boolean;}