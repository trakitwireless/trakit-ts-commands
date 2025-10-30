import { CompanyPolicies, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyPolicies}.
 **/
export class RepCompanyPoliciesGet extends ReplySyncGet<CompanyPolicies> {
	/**
	 * The requested {@link CompanyPolicies}.
	 **/
	companyPolicies: CompanyPolicies | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.companyPolicies) {
			this.companyPolicies = new CompanyPolicies(json.companyPolicies as JsonObject);
		}
	}
}