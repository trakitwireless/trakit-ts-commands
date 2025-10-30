import { Company, CompanyPolicy, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyPolicies}.
 **/
export class RepCompanyPolicyGet extends ReplySyncGetPiece<CompanyPolicy> {
	/**
	 * The requested {@link CompanyPolicy}.
	 **/
	companyPolicies: CompanyPolicy | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyPolicy", 4);
		if (json?.companyPolicies) {
			this.companyPolicies = new CompanyPolicy(json.companyPolicies as JsonObject);
		}
	}
	override getObject() { return this.companyPolicies as CompanyPolicy; }
	protected override _createBlank() { return new Company(); }
}