import { PayIcon } from "./PayIcon";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link Icon}.
 **/
export class PayIconGet extends PayIcon implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Icon} (if it exists).
	 **/
	includeDeleted: boolean;}