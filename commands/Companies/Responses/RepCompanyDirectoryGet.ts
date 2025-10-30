import { CompanyDirectory, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyDirectory}.
 **/
export class RepCompanyDirectoryGet extends ReplySyncGet<CompanyDirectory> {
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