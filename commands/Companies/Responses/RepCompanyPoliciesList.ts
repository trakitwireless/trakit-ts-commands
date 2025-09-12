import { CompanyPolicies, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link companyPolicies}.
 **/
export abstract class RepCompanyPoliciesList extends Reply {
	/**
	 * The list of requested {@link CompanyPolicies}s.
	 **/
	companyPolicies: CompanyPolicies[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.companyPolicies = json?.companyPolicies?.map((policy: any) => new CompanyPolicies(policy));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyPoliciesListByCompany extends RepCompanyPoliciesList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyPoliciesListByCompanyAndLabels extends RepCompanyPoliciesListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link CompanyPolicies.labels}
	 **/
	labels: string[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.labels = json?.labels;
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepCompanyPoliciesListByCompanyAndRefPairs extends RepCompanyPoliciesListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link CompanyPolicies.references}
	 **/
	references: Map<string, string> | nothing;
	
	constructor(json: any) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json.references);
		}
	}
}