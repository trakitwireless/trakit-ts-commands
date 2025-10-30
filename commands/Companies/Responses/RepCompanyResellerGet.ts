import { Company, CompanyReseller, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyReseller}.
 **/
export class RepCompanyResellerGet extends ReplySyncGetPiece<CompanyReseller> {
	/**
	 * The requested {@link CompanyReseller}.
	 **/
	companyReseller: CompanyReseller | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyReseller", 5);
		if (json?.companyReseller) {
			this.companyReseller = new CompanyReseller(json.companyReseller as JsonObject);
		}
	}
	override getObject() { return this.companyReseller as CompanyReseller; }
	protected override _createBlank() { return new Company(); }
}