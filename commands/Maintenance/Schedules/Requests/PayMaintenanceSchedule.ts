import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="maintenanceSchedule"/> object.
 **/
export abstract class PayMaintenanceSchedule extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="MaintenanceSchedule"/>.
	 **/
	maintenanceSchedule: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.maintenanceSchedule?.id.ToString() ?? "";
		}}