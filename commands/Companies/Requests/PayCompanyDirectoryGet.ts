import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="CompanyDirectory"/>.
 **/
export class PayCompanyDirectoryGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyDirectory"/> (if it exists).
	 **/
	includeDeleted: boolean;}