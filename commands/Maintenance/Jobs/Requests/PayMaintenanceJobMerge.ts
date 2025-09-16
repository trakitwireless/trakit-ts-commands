import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamMaintenanceJobMerge } from "./Parameters/ParamMaintenanceJobMerge";

/**
 * Creates a new or updates an existing {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceJob}.
	 **/
	maintenanceJob: ParamMaintenanceJobMerge;

	constructor(json?: any) {
		super(json);
		this.maintenanceJob = new ParamMaintenanceJobMerge(json?.maintenanceJob);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.maintenanceJob?.id?.toString() ?? "";
	}
}