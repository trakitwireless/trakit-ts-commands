import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {CompanyDirectory}.
 **/
export class PayCompanyDirectoryGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {CompanyDirectory} (if it exists).
	 **/
	includeDeleted: boolean;}