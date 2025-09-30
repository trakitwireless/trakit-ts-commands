import { CompanyPolicies, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link companyPolicies}.
 **/
export abstract class RepCompanyPoliciesList extends Reply {
	/**
	 * The list of requested {@link CompanyPolicies}s.
	 **/
	companyPolicies: CompanyPolicies[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.companyPolicies = (json?.companyPolicies as JsonObject[])?.map((policy: any) => new CompanyPolicies(policy));
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

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
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
	labels: codified[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
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
	
	constructor(json: JsonObject) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json?.references as object);
		}
	}
}