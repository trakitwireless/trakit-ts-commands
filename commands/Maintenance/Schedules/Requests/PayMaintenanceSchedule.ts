import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link maintenanceSchedule} object.
 **/
export abstract class PayMaintenanceSchedule extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.maintenanceSchedule?.id?.toString() ?? "";
		}}