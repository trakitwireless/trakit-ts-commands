import { Company, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyGet extends Reply {
	/**
	 * The requested {@link Company}.
	 **/
	company: Company | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.company) {
			this.company = new Company(json.company as JsonObject);
		}
	}
}