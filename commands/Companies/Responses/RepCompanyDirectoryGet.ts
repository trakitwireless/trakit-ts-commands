import { CompanyDirectory, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link companyDirectory}.
 **/
export class RepCompanyDirectoryGet extends Reply {
	/**
	 * The requested {@link CompanyDirectory}.
	 **/
	companyDirectory: CompanyDirectory | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.companyDirectory) {
			this.companyDirectory = new CompanyDirectory(json.companyDirectory as JsonObject);
		}
	}
}