import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="CompanyPolicies"/>.
 **/
export class PayCompanyPoliciesGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyPolicies"/> (if it exists).
	 **/
	includeDeleted: boolean;}