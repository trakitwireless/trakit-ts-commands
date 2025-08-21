import { Reply } from "../../API/Responses/Reply";
import { RepCompanyResellerList } from "./RepCompanyResellerList";
import { RepCompanyResellerListByCompany } from "./RepCompanyResellerList";

/**
 * A container for the requested <see cref="companyResellers"/>.
 **/
export abstract class RepCompanyResellerList extends Reply {
	/**
	 * The list of requested <see cref="CompanyReseller"/>s.
	 **/
	companyResellers: CompanyReseller[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyResellerListByCompany extends RepCompanyResellerList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyResellerListByCompanyAndLabels extends RepCompanyResellerListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="CompanyReseller.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyResellerListByCompanyAndRefPairs extends RepCompanyResellerListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="CompanyReseller.references"/>
	 **/
	references: Map<string, string>;}