import { Company, JsonObject, UserSetting, UserGroup } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserSettingListByCompany, RepUserSettingListByUserGroup } from "../Responses/RepUserSettingList";

/**
 * Gets a list of {@link UserSetting}s.
 */
export abstract class PayUserSettingList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserSetting} (if it exists).
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
 * Gets the list of {@link UserSetting}s for the specified {@link Company}.
 */
export class PayUserSettingListByCompany extends PayUserSettingList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserSettingListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}
/**
 * Gets the list of {@link UserSetting}s for the specified {@link UserGroup}.
 */
export class PayUserSettingListByUserGroup extends PayUserSettingList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.userGroup = new ParamId(json?.userGroup as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserSettingListByUserGroup(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			userGroup: this.userGroup.toJSON(),
		};
	}
}