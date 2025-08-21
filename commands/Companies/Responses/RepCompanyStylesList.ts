import { Reply } from "../../API/Responses/Reply";
import { RepCompanyStylesList } from "./RepCompanyStylesList";
import { RepCompanyStylesListByCompany } from "./RepCompanyStylesList";

/**
 * A container for the requested <see cref="companyStyless"/>.
 **/
export abstract class RepCompanyStylesList extends Reply {
	/**
	 * The list of requested <see cref="CompanyStyles"/>s.
	 **/
	companyStyless: CompanyStyles[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyStylesListByCompany extends RepCompanyStylesList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyStylesListByCompanyAndLabels extends RepCompanyStylesListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="CompanyStyles.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyStylesListByCompanyAndRefPairs extends RepCompanyStylesListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="CompanyStyles.references"/>
	 **/
	references: Map<string, string>;}