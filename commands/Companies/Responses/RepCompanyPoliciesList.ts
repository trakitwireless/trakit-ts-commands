import { CompanyPolicies, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyPolicies}.
 **/
export abstract class RepCompanyPoliciesList extends ReplySyncList<CompanyPolicies> {
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