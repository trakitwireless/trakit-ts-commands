import { Reply } from "../../API/Responses/Reply";
import { RepCompanyPoliciesList } from "./RepCompanyPoliciesList";
import { RepCompanyPoliciesListByCompany } from "./RepCompanyPoliciesList";

/**
 * A container for the requested <see cref="companyPolicies"/>.
 **/
export abstract class RepCompanyPoliciesList extends Reply {
	/**
	 * The list of requested <see cref="CompanyPolicies"/>s.
	 **/
	companyPolicies: CompanyPolicies[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyPoliciesListByCompany extends RepCompanyPoliciesList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyPoliciesListByCompanyAndLabels extends RepCompanyPoliciesListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="CompanyPolicies.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyPoliciesListByCompanyAndRefPairs extends RepCompanyPoliciesListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="CompanyPolicies.references"/>
	 **/
	references: Map<string, string>;}