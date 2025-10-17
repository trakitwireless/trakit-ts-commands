import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserAdvancedListByCompany, RepUserAdvancedListByUserGroup } from "../Responses/RepUserAdvancedList";

/**
 * Gets a list of {@link UserAdvanced}s.
 **/
export abstract class PayUserAdvancedList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link UserAdvanced}s for the specified {@link Company}.
 **/
export class PayUserAdvancedListByCompany extends PayUserAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}
	
	override createReply(json: JsonObject): Reply {
		return new RepUserAdvancedListByCompany(json);
	}
}
/**
 * Gets the list of {@link UserAdvanced}s for the specified {@link UserGroup}.
 **/
export class PayUserAdvancedListByUserGroup extends PayUserAdvancedList {
	/**
	 * Identifier of the {@link Group} to which this collection belongs.
	 **/
	group: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.group = new ParamId(json?.group as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserAdvancedListByUserGroup(json);
	}
}