import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDirectoryGet } from "../Responses/RepCompanyDirectoryGet";
import { PayCompany } from "./PayCompany";

/**
 * Gets details of the specified {@link CompanyDirectory}.
 **/
export class PayCompanyDirectoryGet extends PayCompany implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyDirectoryGet(json as JsonObject);
	}
}