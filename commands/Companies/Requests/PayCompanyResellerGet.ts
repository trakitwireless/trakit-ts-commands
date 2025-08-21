import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="CompanyReseller"/>.
 **/
export class PayCompanyResellerGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyReseller"/> (if it exists).
	 **/
	includeDeleted: boolean;}