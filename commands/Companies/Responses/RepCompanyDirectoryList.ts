import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDirectoryList } from "./RepCompanyDirectoryList";
import { RepCompanyDirectoryListByCompany } from "./RepCompanyDirectoryList";

/**
 * A container for the requested <see cref="companyDirectorys"/>.
 **/
export abstract class RepCompanyDirectoryList extends Reply {
	/**
	 * The list of requested <see cref="CompanyDirectory"/>s.
	 **/
	companyDirectorys: CompanyDirectory[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyDirectoryListByCompany extends RepCompanyDirectoryList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyDirectoryListByCompanyAndLabels extends RepCompanyDirectoryListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="CompanyDirectory.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyDirectoryListByCompanyAndRefPairs extends RepCompanyDirectoryListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="CompanyDirectory.references"/>
	 **/
	references: Map<string, string>;}