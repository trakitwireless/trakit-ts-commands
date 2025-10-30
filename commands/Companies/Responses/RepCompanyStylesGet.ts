import { Company, CompanyStyles, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyStyles}.
 **/
export class RepCompanyStylesGet extends ReplySyncGetPiece<CompanyStyles> {
	/**
	 * The requested {@link CompanyStyles}.
	 **/
	companyStyles: CompanyStyles | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyStyles", 3);
		if (json?.companyStyles) {
			this.companyStyles = new CompanyStyles(json.companyStyles as JsonObject);
		}
	}
	override getObject() { return this.companyStyles as CompanyStyles; }
	protected override _createBlank() { return new Company(); }
}