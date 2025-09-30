import { Reply } from "../../../API/Responses/Reply";
import { PayMaintenanceJob } from "./PayMaintenanceJob";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepMaintenanceJobGet } from "../Responses/RepMaintenanceJobGet";

/**
 * Gets details of the specified {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobGet extends PayMaintenanceJob implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link MaintenanceJob} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceJobGet(json as JsonObject);
	}
}