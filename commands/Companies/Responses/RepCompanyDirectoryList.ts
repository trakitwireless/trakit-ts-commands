import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDirectoryList } from "./RepCompanyDirectoryList";
import { RepCompanyDirectoryListByCompany } from "./RepCompanyDirectoryList";

/**
 * A container for the requested {@link companyDirectorys}.
 **/
export abstract class RepCompanyDirectoryList extends Reply {
	/**
	 * The list of requested {@link CompanyDirectory}s.
	 **/
	companyDirectorys: CompanyDirectory[];
	}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyDirectoryListByCompany extends RepCompanyDirectoryList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyDirectoryListByCompanyAndLabels extends RepCompanyDirectoryListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyDirectory.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyDirectoryListByCompanyAndRefPairs extends RepCompanyDirectoryListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyDirectory.references}
	 **/
	references: Map<string, string>;}