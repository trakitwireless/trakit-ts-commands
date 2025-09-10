import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ParamMaintenanceScheduleMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.maintenanceSchedule?.id?.toString() ?? "";
		}}