import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepCompanyDirectoryGet } from "../Responses/RepCompanyDirectoryGet";

/**
 * Gets details of the specified {@link CompanyDirectory}.
 **/
export class PayCompanyDirectoryGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepCompanyDirectoryGet(json);
	}
}