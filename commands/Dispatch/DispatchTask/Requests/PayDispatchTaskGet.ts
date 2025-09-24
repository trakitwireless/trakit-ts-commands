import { PayDispatchTask } from "./PayDispatchTask";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link DispatchTask}.
 **/
export class PayDispatchTaskGet extends PayDispatchTask implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link DispatchTask} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepDispatchTaskGet(json);
	}
}