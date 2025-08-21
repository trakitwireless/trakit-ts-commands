import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link maintenanceJob} object.
 **/
export abstract class PayMaintenanceJob extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link MaintenanceJob}.
	 **/
	maintenanceJob: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.maintenanceJob?.id.ToString() ?? "";
		}}