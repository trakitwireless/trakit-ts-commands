import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyGeneralGet } from "../Responses/RepCompanyGeneralGet";
import { PayCompany } from "./PayCompany";

/**
 * Gets details of the specified {@link CompanyGeneral}.
 */
export class PayCompanyGeneralGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyGeneral} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyGeneralGet(json);
	}
}