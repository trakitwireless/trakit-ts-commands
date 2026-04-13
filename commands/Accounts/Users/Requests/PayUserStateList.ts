import { Company, JsonObject, UserState, UserGroup } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserStateListByCompany, RepUserStateListByUserGroup } from "../Responses/RepUserStateList";

/**
 * Gets a list of {@link UserState}s.
 */
export abstract class PayUserStateList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserState} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}

/**
 * Gets the list of {@link UserState}s for the specified {@link Company}.
 */
export class PayUserStateListByCompany extends PayUserStateList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserStateListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}
/**
 * Gets the list of {@link UserState}s for the specified {@link UserGroup}.
 */
export class PayUserStateListByUserGroup extends PayUserStateList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.userGroup = new ParamId(json?.userGroup as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserStateListByUserGroup(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			userGroup: this.userGroup.toJSON(),
		};
	}
}