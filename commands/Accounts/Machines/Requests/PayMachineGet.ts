import { Reply } from "../../../API/Responses/Reply";
import { PayMachine } from "./PayMachine";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepMachineGet } from "../Responses/RepMachineGet";

/**
 * Gets details of the specified {@link Machine}.
 **/
export class PayMachineGet extends PayMachine implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Machine} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepMachineGet(json);
	}
}