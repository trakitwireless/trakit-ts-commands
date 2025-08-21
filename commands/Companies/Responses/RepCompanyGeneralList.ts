import { Reply } from "../../API/Responses/Reply";
import { RepCompanyGeneralList } from "./RepCompanyGeneralList";
import { RepCompanyGeneralListByCompany } from "./RepCompanyGeneralList";

/**
 * A container for the requested @link {companyGenerals}.
 **/
export abstract class RepCompanyGeneralList extends Reply {
	/**
	 * The list of requested @link {CompanyGeneral}s.
	 **/
	companyGenerals: CompanyGeneral[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyGeneralListByCompany extends RepCompanyGeneralList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyGeneralListByCompanyAndLabels extends RepCompanyGeneralListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyGeneralListByCompanyAndRefPairs extends RepCompanyGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyGeneral.references}
	 **/
	references: Map<string, string>;}