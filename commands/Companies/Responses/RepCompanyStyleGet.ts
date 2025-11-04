import { Company, CompanyStyle, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyStyle}.
 **/
export class RepCompanyStyleGet extends ReplySyncGetPiece<CompanyStyle> {
	/**
	 * The requested {@link CompanyStyle}.
	 **/
	companyStyle: CompanyStyle | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyStyle", 3);
		if (json?.companyStyle || json?.companyLabels) {
			this.companyStyle = new CompanyStyle(
				json.companyStyle as JsonObject
				?? json.companyLabels as JsonObject
			);
		}
	}
	override getObject() { return this.companyStyle as CompanyStyle; }
	protected override _createBlank() { return new Company(); }
}