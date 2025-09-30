import { CompanyDirectory, nothing, serialization } from "@trakit/objects";
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

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyDirectoryListByCompanyAndLabels extends RepCompanyDirectoryListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyDirectory.labels}
	 **/
	labels: codified[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyDirectoryListByCompanyAndRefPairs extends RepCompanyDirectoryListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyDirectory.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json?.references as object);
		}
	}
}