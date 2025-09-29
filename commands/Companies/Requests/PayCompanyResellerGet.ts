import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepCompanyResellerGet } from "../Responses/RepCompanyResellerGet";

/**
 * Gets details of the specified {@link CompanyReseller}.
 **/
export class PayCompanyResellerGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyReseller} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyResellerGet(json);
	}
}