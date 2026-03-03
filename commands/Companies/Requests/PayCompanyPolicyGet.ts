import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyPolicyGet } from "../Responses/RepCompanyPolicyGet";
import { PayCompany } from "./PayCompany";

/**
 * Gets details of the specified {@link CompanyPolicies}.
 */
export class PayCompanyPolicyGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyPolicies} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyPolicyGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}