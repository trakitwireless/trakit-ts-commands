import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserStateGet } from "../Responses/RepUserStateGet";
import { PayUser } from "./PayUser";

/**
 * Gets details of the specified {@link UserState}.
 */
export class PayUserStateGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserState} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserStateGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}