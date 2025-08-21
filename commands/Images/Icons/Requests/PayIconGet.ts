import { PayIcon } from "./PayIcon";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Icon"/>.
 **/
export class PayIconGet extends PayIcon implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Icon"/> (if it exists).
	 **/
	includeDeleted: boolean;}