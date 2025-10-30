import { CompanyStyles, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyStyles}.
 **/
export class RepCompanyStylesGet extends ReplySyncGet<CompanyStyles> {
	/**
	 * The requested {@link CompanyStyles}.
	 **/
	companyStyles: CompanyStyles | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.companyStyles) {
			this.companyStyles = new CompanyStyles(json.companyStyles as JsonObject);
		}
	}
}