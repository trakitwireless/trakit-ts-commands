import { Reply } from "../../API/Responses/Reply";
import { RepCompanyStylesList } from "./RepCompanyStylesList";
import { RepCompanyStylesListByCompany } from "./RepCompanyStylesList";

/**
 * A container for the requested @link {companyStyless}.
 **/
export abstract class RepCompanyStylesList extends Reply {
	/**
	 * The list of requested @link {CompanyStyles}s.
	 **/
	companyStyless: CompanyStyles[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyStylesListByCompany extends RepCompanyStylesList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyStylesListByCompanyAndLabels extends RepCompanyStylesListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyStyles.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyStylesListByCompanyAndRefPairs extends RepCompanyStylesListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyStyles.references}
	 **/
	references: Map<string, string>;}