import { CompanyStyles } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyStyles}.
 **/
export class RepCompanyStylesGet extends Reply {
	/**
	 * The requested {@link CompanyStyles}.
	 **/
	companyStyles: CompanyStyles;

	constructor(json: any) {
		super(json);
		if (json?.companyStyles) {
			this.companyStyles = new CompanyStyles(json.companyStyles);
		}
	}
}