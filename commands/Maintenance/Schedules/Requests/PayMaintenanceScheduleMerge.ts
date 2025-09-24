import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamMaintenanceScheduleMerge } from "./Parameters/ParamMaintenanceScheduleMerge";

/**
 * Creates a new or updates an existing {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ParamMaintenanceScheduleMerge;

	constructor(json?: any) {
		super(json);
		this.maintenanceSchedule = new ParamMaintenanceScheduleMerge(json?.maintenanceSchedule);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.maintenanceSchedule?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleMerge(json);
	}
}