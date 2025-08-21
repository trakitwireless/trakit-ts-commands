import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Company"/>.
 **/
export class PayCompanyGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Company"/> (if it exists).
	 **/
	includeDeleted: boolean;}