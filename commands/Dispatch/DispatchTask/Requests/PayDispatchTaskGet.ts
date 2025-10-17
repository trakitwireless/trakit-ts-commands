import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskGet } from "../Responses/RepDispatchTaskGet";
import { PayDispatchTask } from "./PayDispatchTask";

/**
 * Gets details of the specified {@link DispatchTask}.
 **/
export class PayDispatchTaskGet extends PayDispatchTask implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link DispatchTask} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchTaskGet(json);
	}
}