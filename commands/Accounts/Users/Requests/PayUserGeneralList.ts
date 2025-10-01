import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserGeneralListByCompany, RepUserGeneralListByUserGroup } from "../Responses/RepUserGeneralList";

/**
 * Gets a list of {@link UserGeneral}s.
 **/
export abstract class PayUserGeneralList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}
}

/**
 * Gets the list of {@link UserGeneral}s for the specified {@link Company}.
 **/
export class PayUserGeneralListByCompany extends PayUserGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserGeneralListByCompany(json);
	}
}
/**
 * Gets the list of {@link UserGeneral}s for the specified {@link Company}.
 **/
export class PayUserGeneralListByUserGroup extends PayUserGeneralList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 **/
	group: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.group = new ParamId(json?.group as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserGeneralListByUserGroup(json);
	}
}