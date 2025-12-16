import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepMachineGet } from "../Responses/RepMachineGet";
import { PayMachine } from "./PayMachine";

/**
 * Gets details of the specified {@link Machine}.
 */
export class PayMachineGet extends PayMachine implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Machine} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepMachineGet(json);
	}
}