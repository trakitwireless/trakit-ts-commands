import { CompanyStyles, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyStyles}.
 **/
export class RepCompanyStylesGet extends Reply {
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