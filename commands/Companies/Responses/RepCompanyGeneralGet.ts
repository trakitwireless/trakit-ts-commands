import { CompanyGeneral, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyGeneral}.
 **/
export class RepCompanyGeneralGet extends ReplySyncGet<CompanyGeneral> {
	/**
	 * The requested {@link CompanyGeneral}.
	 **/
	companyGeneral: CompanyGeneral | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.companyGeneral) {
			this.companyGeneral = new CompanyGeneral(json.companyGeneral as JsonObject);
		}
	}
}