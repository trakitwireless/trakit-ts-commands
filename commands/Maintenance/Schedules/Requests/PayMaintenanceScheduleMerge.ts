import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamMaintenanceScheduleMerge } from "./Parameters/ParamMaintenanceScheduleMerge";
import { RepMaintenanceScheduleMerge } from "../Responses/RepMaintenanceScheduleMerge";

/**
 * Creates a new or updates an existing {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ParamMaintenanceScheduleMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceSchedule = new ParamMaintenanceScheduleMerge(json?.maintenanceSchedule as JsonObject);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.maintenanceSchedule?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceScheduleMerge(json as JsonObject);
	}
}