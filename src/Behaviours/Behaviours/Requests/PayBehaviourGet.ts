import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourGet } from "../Responses/RepBehaviourGet";
import { PayBehaviour } from "./PayBehaviour";

/**
 * Gets details of the specified {@link Behaviour}.
 */
export class PayBehaviourGet extends PayBehaviour implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Behaviour} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}