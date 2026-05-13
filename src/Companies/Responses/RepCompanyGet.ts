import { Company, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link company}.
 */
export class RepCompanyGet extends ReplySyncGet<Company> {
	/**
	 * The requested {@link Company}.
	 */
	company: Company | nothing;

	constructor(json: JsonObject) {
		super(json, "Company");
		if (json?.company) {
			this.company = new Company(json.company as JsonObject);
		}
	}
	override getObject() { return this.company as Company; }
	override getCompanyId() { return this.company?.parentId as ulong; }
}