import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyPolicyListByCompany } from "../Responses/RepCompanyPolicyList";

/**
 * Gets a list of {@link CompanyPolicies}s.
 **/
export abstract class PayCompanyPolicyList extends Payload implements IPayDeletable {
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
export class PayCompanyPolicyListByCompany extends PayCompanyPolicyList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyPolicyListByCompany(json);
	}
}