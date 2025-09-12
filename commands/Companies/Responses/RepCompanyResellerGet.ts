import { CompanyReseller, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyReseller}.
 **/
export class RepCompanyResellerGet extends Reply {
	/**
	 * The requested {@link CompanyReseller}.
	 **/
	companyReseller: CompanyReseller | nothing;

	constructor(json: any) {
		super(json);
		if (json?.companyReseller) {
			this.companyReseller = new CompanyReseller(json.companyReseller);
		}
	}
}