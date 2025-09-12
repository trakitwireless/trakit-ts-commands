import { CompanyGeneral, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyGeneral}.
 **/
export class RepCompanyGeneralGet extends Reply {
	/**
	 * The requested {@link CompanyGeneral}.
	 **/
	companyGeneral: CompanyGeneral | nothing;

	constructor(json: any) {
		super(json);
		if (json?.companyGeneral) {
			this.companyGeneral = new CompanyGeneral(json.companyGeneral);
		}
	}
}