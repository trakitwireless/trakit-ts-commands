import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepFormResultGet } from "../Responses/RepFormResultGet";
import { PayFormResult } from "./PayFormResult";

/**
 * Gets details of the specified {@link FormResult}.
 */
export class PayFormResultGet extends PayFormResult implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link FormResult} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormResultGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}