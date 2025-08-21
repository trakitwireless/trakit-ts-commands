import { PayUser } from "./PayUser";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link UserGeneral}.
 **/
export class PayUserGeneralGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
	 **/
	includeDeleted: boolean;}