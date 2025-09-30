import { serialization } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyPoliciesListByCompany, RepCompanyPoliciesListByCompanyAndLabels, RepCompanyPoliciesListByCompanyAndRefPairs } from "../Responses/RepCompanyPoliciesList";

/**
 * Gets a list of {@link CompanyPolicies}s.
 **/
export abstract class PayCompanyPoliciesList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyPolicies} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super();
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link CompanyPolicies}s for the specified {@link Company}.
 **/
export class PayCompanyPoliciesListByCompany extends PayCompanyPoliciesList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyPoliciesListByCompany(json as JsonObject);
	}
}
/**
 * Gets the list of {@link CompanyPolicies}s for the specified {@link Company} only if the {@link CompanyPoliciesPolicies.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayCompanyPoliciesListByCompanyAndLabels extends PayCompanyPoliciesListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link CompanyPolicies.labels}
	 **/
	labels: codified[];

	constructor(json?: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[] ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyPoliciesListByCompanyAndLabels(json as JsonObject);
	}
}
/**
 * Gets the list of {@link CompanyPolicies}s for the specified {@link Company} only if one of the specified {@link CompanyPoliciesPolicies.references} fields match.
 * If no references are specified, it will match any {@link CompanyPolicies} with no references.
 * If a reference value is null, it will match any {@link CompanyPolicies} without that reference key.
 **/
export class PayCompanyPoliciesListByCompanyAndRefPairs extends PayCompanyPoliciesListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link CompanyPoliciesPolicies.references}
	 **/
	references: Map<string, string>;

	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: new Map<string, string>();
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyPoliciesListByCompanyAndRefPairs(json as JsonObject);
	}
}