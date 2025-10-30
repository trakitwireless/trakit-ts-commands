import { Company, CompanyPolicies, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyPolicies}.
 **/
export class RepCompanyPoliciesGet extends ReplySyncGetPiece<CompanyPolicies> {
	/**
	 * The requested {@link CompanyPolicies}.
	 **/
	companyPolicies: CompanyPolicies | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyPolicies", 4);
		if (json?.companyPolicies) {
			this.companyPolicies = new CompanyPolicies(json.companyPolicies as JsonObject);
		}
	}
	override getObject() { return this.companyPolicies as CompanyPolicies; }
	protected override _createBlank() { return new Company(); }
}