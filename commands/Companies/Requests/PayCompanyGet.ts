import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepCompanyGet } from "../Responses/RepCompanyGet";

/**
 * Gets details of the specified {@link Company}.
 **/
export class PayCompanyGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Company} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyGet(json);
	}
}