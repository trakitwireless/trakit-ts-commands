import { Reply } from "../../API/Responses/Reply";
import { RepCompanyPoliciesList } from "./RepCompanyPoliciesList";
import { RepCompanyPoliciesListByCompany } from "./RepCompanyPoliciesList";

/**
 * A container for the requested {@link companyPolicies}.
 **/
export abstract class RepCompanyPoliciesList extends Reply {
	/**
	 * The list of requested {@link CompanyPolicies}s.
	 **/
	companyPolicies: CompanyPolicies[];
	}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyPoliciesListByCompany extends RepCompanyPoliciesList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyPoliciesListByCompanyAndLabels extends RepCompanyPoliciesListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyPolicies.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyPoliciesListByCompanyAndRefPairs extends RepCompanyPoliciesListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyPolicies.references}
	 **/
	references: Map<string, string>;}