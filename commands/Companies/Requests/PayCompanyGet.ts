import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link Company}.
 **/
export class PayCompanyGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Company} (if it exists).
	 **/
	includeDeleted: boolean;}