import { codified, CompanyPolicy, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdParent } from "../../API/Responses/Content/ContentIdParent";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link companyPolicies}.
 */
export abstract class RepCompanyPolicyList extends ReplySyncList<CompanyPolicy> {
	/**
	 * The list of requested {@link CompanyPolicy}s.
	 */
	companyPolicies: CompanyPolicy[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "CompanyPolicy");
		this.companyPolicies = (json?.companyPolicies as JsonObject[])?.map((policy: any) => new CompanyPolicy(policy));
	}
	override getList() { return this.companyPolicies as CompanyPolicy[]; }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepCompanyPolicyListByCompany extends RepCompanyPolicyList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentIdParent | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentIdParent.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, CompanyPolicy], index: number): boolean {
		return pair[1].parentId === (this.company as ContentIdParent).id;
	}
	override getCompanyId() { return this.company?.parent as ulong; }
}