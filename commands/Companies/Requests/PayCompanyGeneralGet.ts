import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="CompanyGeneral"/>.
 **/
export class PayCompanyGeneralGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyGeneral"/> (if it exists).
	 **/
	includeDeleted: boolean;}