import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserSettingGet } from "../Responses/RepUserSettingGet";
import { PayUser } from "./PayUser";

/**
 * Gets details of the specified {@link UserSetting}.
 */
export class PayUserSettingGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserSetting} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserSettingGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}