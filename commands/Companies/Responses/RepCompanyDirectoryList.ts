import { codified, Company, CompanyDirectory, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyDirectories}.
 */
export abstract class RepCompanyDirectoryList extends ReplySyncListPiece<CompanyDirectory> {
	/**
	 * The list of requested {@link CompanyDirectory}s.
	 */
	companyDirectories: CompanyDirectory[] | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyDirectory", 2);
		this.companyDirectories = (json?.companyDirectories as JsonObject[])?.map((c: any) => new CompanyDirectory(c));
	}
	override getList() { return this.companyDirectories as CompanyDirectory[]; }
	protected override _createBlank() { return new Company(); }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepCompanyDirectoryListByCompany extends RepCompanyDirectoryList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentIdParent | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentIdParent.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, CompanyDirectory], index: number): boolean {
		return pair[1].parentId === (this.company as ContentIdParent).id;
	}
	override getCompanyId() { return this.company?.parent as ulong; }
}