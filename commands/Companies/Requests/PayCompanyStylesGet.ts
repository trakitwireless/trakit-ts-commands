import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepCompanyStylesGet } from "../Responses/RepCompanyStylesGet";

/**
 * Gets details of the specified {@link CompanyStyles}.
 **/
export class PayCompanyStylesGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link CompanyStyles}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyStylesGet(json);
	}
}