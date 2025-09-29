import { Reply } from "../../../API/Responses/Reply";
import { PayUserGroup } from "./PayUserGroup";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepUserGroupGet } from "../Responses/RepUserGroupGet";

/**
 * Gets details of the specified {@link UserGroup}.
 **/
export class PayUserGroupGet extends PayUserGroup implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserGroup} (if it exists).
	 **/
	includeDeleted: boolean;
	
	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepUserGroupGet(json);
	}
}