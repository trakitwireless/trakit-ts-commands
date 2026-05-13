import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserAuthenticationGet } from "../Responses/RepUserAuthenticationGet";
import { PayUser } from "./PayUser";

/**
 * Gets details of the specified {@link UserAuthentication}.
 */
export class PayUserAuthenticationGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAuthentication} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserAuthenticationGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}