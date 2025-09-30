import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepCompanyPoliciesGet } from "../Responses/RepCompanyPoliciesGet";

/**
 * Gets details of the specified {@link CompanyPolicies}.
 **/
export class PayCompanyPoliciesGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyPolicies} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyPoliciesGet(json as JsonObject);
	}
}