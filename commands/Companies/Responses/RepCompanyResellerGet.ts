import { CompanyReseller, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyReseller}.
 **/
export class RepCompanyResellerGet extends ReplySyncGet<CompanyReseller> {
	/**
	 * The requested {@link CompanyReseller}.
	 **/
	companyReseller: CompanyReseller | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.companyReseller) {
			this.companyReseller = new CompanyReseller(json.companyReseller as JsonObject);
		}
	}
}