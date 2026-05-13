import { Company, JsonObject, UserAuthentication, UserGroup } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserAuthenticationListByCompany, RepUserAuthenticationListByUserGroup } from "../Responses/RepUserAuthenticationList";

/**
 * Gets a list of {@link UserAuthentication}s.
 */
export abstract class PayUserAuthenticationList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAuthentication} (if it exists).
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
 * Gets the list of {@link UserAuthentication}s for the specified {@link Company}.
 */
export class PayUserAuthenticationListByCompany extends PayUserAuthenticationList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserAuthenticationListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}
/**
 * Gets the list of {@link UserAuthentication}s for the specified {@link UserGroup}.
 */
export class PayUserAuthenticationListByUserGroup extends PayUserAuthenticationList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.userGroup = new ParamId(json?.userGroup as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserAuthenticationListByUserGroup(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			userGroup: this.userGroup.toJSON(),
		};
	}
}