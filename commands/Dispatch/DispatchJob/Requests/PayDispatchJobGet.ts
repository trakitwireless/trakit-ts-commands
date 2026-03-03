import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayDispatchJob } from "./PayDispatchJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepDispatchJobGet } from "../Responses/RepDispatchJobGet";

/**
 * Gets details of the specified {@link DispatchJob}.
 */
export class PayDispatchJobGet extends PayDispatchJob implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link DispatchJob} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}