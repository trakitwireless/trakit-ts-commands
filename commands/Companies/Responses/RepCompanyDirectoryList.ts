import { CompanyDirectory, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyDirectorys}.
 **/
export abstract class RepCompanyDirectoryList extends ReplySyncList<CompanyDirectory> {
	/**
	 * The list of requested {@link CompanyDirectory}s.
	 **/
	companyDirectories: CompanyDirectory[] | nothing;

	constructor(json: JsonObject) {
		super(json, "CompanyDirectory");
		this.companyDirectories = (json?.companyDirectories as JsonObject[])?.map((c: any) => new CompanyDirectory(c));
	}
	override getCollection() { return this.companyDirectories as CompanyDirectory[]; }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyDirectoryListByCompany extends RepCompanyDirectoryList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}