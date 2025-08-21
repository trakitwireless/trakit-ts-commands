import { PayUser } from "./PayUser";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link UserAdvanced}.
 **/
export class PayUserAdvancedGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;}