import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";
import { RepUserListByCompany } from "../Responses/RepUserList";

/**
 * Gets details of the specified {@link user}.
 **/
export abstract class PayUserList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link User}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayUserListByCompany extends PayUserList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepUserListByCompany(json);
	}
}