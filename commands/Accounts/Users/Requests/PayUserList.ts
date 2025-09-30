import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserListByCompany, RepUserListByGroup } from "../Responses/RepUserList";

/**
 * Gets details of the specified {@link user}.
 **/
export abstract class PayUserList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link User}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
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

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserListByCompany(json as JsonObject);
	}
}
/**
 * 
 **/
export class PayUserListByGroup extends PayUserList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 **/
	userGroup: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.userGroup = new ParamId(json?.userGroup as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserListByGroup(json as JsonObject);
	}
}