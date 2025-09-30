import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link maintenanceSchedule} object.
 **/
export abstract class PayMaintenanceSchedule extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceSchedule = new ParamId(json?.maintenanceSchedule as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.maintenanceSchedule?.id?.toString() ?? "";
	}
}