import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceScheduleGet } from "../Responses/RepMaintenanceScheduleGet";
import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";

/**
 * Gets details of the specified {@link MaintenanceSchedule}.
 */
export class PayMaintenanceScheduleGet extends PayMaintenanceSchedule implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link MaintenanceSchedule} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceScheduleGet(json);
	}
}