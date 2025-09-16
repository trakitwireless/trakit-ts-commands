import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link maintenanceJob} object.
 **/
export abstract class PayMaintenanceJob extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link MaintenanceJob}.
	 **/
	maintenanceJob: ParamId;

	constructor(json?: any) {
		super(json);
		this.maintenanceJob = new ParamId(json?.maintenanceJob);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.maintenanceJob?.id?.toString() ?? "";
	}
}