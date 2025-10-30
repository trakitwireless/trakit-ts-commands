import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyStyleListByCompany } from "../Responses/RepCompanyStyleList";

/**
 * Gets a list of {@link CompanyStyles}s.
 **/
export abstract class PayCompanyStyleList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyStyles} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super();
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link CompanyStyles}s for the specified {@link Company}.
 **/
export class PayCompanyStyleListByCompany extends PayCompanyStyleList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyStyleListByCompany(json);
	}
}