import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceScheduleMerge } from "../Responses/RepMaintenanceScheduleMerge";
import { ParamMaintenanceScheduleMerge } from "./Parameters/ParamMaintenanceScheduleMerge";

/**
 * Creates a new or updates an existing {@link MaintenanceSchedule}.
 */
export class PayMaintenanceScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceSchedule}.
	 */
	maintenanceSchedule: ParamMaintenanceScheduleMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceSchedule = new ParamMaintenanceScheduleMerge(json?.maintenanceSchedule as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.maintenanceSchedule?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceScheduleMerge(json);
	}
}