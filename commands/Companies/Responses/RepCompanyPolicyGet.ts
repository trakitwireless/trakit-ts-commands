import { Company, CompanyPolicy, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyPolicy}.
 **/
export class RepCompanyPolicyGet extends ReplySyncGetPiece<CompanyPolicy> {
	/**
	 * The requested {@link CompanyPolicy}.
	 **/
	companyPolicy: CompanyPolicy | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyPolicy", 4);
		if (json?.companyPolicy || json?.companyPolicies) {
			this.companyPolicy = new CompanyPolicy(
				json.companyPolicy as JsonObject
				?? json.companyPolicies as JsonObject
			);
		}
	}
	override getObject() { return this.companyPolicy as CompanyPolicy; }
	protected override _createBlank() { return new Company(); }
}