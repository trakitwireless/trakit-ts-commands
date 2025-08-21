import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="CompanyStyles"/>.
 **/
export class PayCompanyStylesGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="CompanyStyles"/>s.
	 **/
	includeDeleted: boolean;}