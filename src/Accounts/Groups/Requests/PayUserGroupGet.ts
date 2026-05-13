import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserGroupGet } from "../Responses/RepUserGroupGet";
import { PayUserGroup } from "./PayUserGroup";

/**
 * Gets details of the specified {@link UserGroup}.
 */
export class PayUserGroupGet extends PayUserGroup implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserGroup} (if it exists).
	 */
	includeDeleted: boolean;
	
	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserGroupGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}