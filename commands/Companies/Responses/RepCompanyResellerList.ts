import { Reply } from "../../API/Responses/Reply";
import { RepCompanyResellerList } from "./RepCompanyResellerList";
import { RepCompanyResellerListByCompany } from "./RepCompanyResellerList";

/**
 * A container for the requested @link {companyResellers}.
 **/
export abstract class RepCompanyResellerList extends Reply {
	/**
	 * The list of requested @link {CompanyReseller}s.
	 **/
	companyResellers: CompanyReseller[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyResellerListByCompany extends RepCompanyResellerList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyResellerListByCompanyAndLabels extends RepCompanyResellerListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyReseller.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepCompanyResellerListByCompanyAndRefPairs extends RepCompanyResellerListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyReseller.references}
	 **/
	references: Map<string, string>;}