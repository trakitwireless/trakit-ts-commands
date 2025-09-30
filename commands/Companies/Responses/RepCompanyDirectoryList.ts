import { CompanyDirectory, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link companyDirectorys}.
 **/
export abstract class RepCompanyDirectoryList extends Reply {
	/**
	 * The list of requested {@link CompanyDirectory}s.
	 **/
	companyDirectorys: CompanyDirectory[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.companyDirectorys = (json?.companyDirectorys as JsonObject[])?.map((c: any) => new CompanyDirectory(c));
	}
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