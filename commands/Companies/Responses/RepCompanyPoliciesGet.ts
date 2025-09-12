import { CompanyPolicies, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyPolicies}.
 **/
export class RepCompanyPoliciesGet extends Reply {
	/**
	 * The requested {@link CompanyPolicies}.
	 **/
	companyPolicies: CompanyPolicies | nothing;

	constructor(json: any) {
		super(json);
		if (json?.companyPolicies) {
			this.companyPolicies = new CompanyPolicies(json.companyPolicies);
		}
	}
}