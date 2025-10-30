import { Company, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link company}.
 **/
export class RepCompanyGet extends ReplySyncGet<Company> {
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