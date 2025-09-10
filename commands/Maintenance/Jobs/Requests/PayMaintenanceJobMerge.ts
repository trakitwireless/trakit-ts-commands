import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceJob}.
	 **/
	maintenanceJob: ParamMaintenanceJobMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.maintenanceJob?.id?.toString() ?? "";
		}}