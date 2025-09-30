import { Reply } from "../../../API/Responses/Reply";
import { PayIcon } from "./PayIcon";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepIconGet } from "../Responses/RepIconGet";

/**
 * Gets details of the specified {@link Icon}.
 **/
export class PayIconGet extends PayIcon implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Icon} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepIconGet(json as JsonObject);
	}
}