import { Company, CompanyGeneral, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyGeneral}.
 **/
export class RepCompanyGeneralGet extends ReplySyncGetPiece<CompanyGeneral> {
	/**
	 * The requested {@link CompanyGeneral}.
	 **/
	companyGeneral: CompanyGeneral | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyGeneral", 0);
		if (json?.companyGeneral) {
			this.companyGeneral = new CompanyGeneral(json.companyGeneral as JsonObject);
		}
	}
	override getObject() { return this.companyGeneral as CompanyGeneral; }
	protected override _createBlank() { return new Company(); }
}