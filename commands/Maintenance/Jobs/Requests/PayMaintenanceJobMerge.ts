import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="MaintenanceJob"/>.
 **/
export class PayMaintenanceJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="MaintenanceJob"/>.
	 **/
	maintenanceJob: ParamMaintenanceJobMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.maintenanceJob?.id?.ToString() ?? "";
		}}