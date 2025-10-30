import { Company, CompanyDirectory, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGetPiece } from "../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link companyDirectory}.
 **/
export class RepCompanyDirectoryGet extends ReplySyncGetPiece<CompanyDirectory> {
	/**
	 * The requested {@link CompanyDirectory}.
	 **/
	companyDirectory: CompanyDirectory | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyDirectory", 2);
		if (json?.companyDirectory) {
			this.companyDirectory = new CompanyDirectory(json.companyDirectory as JsonObject);
		}
	}
	override getObject() { return this.companyDirectory as CompanyDirectory; }
	protected override _createBlank() { return new Company(); }
}