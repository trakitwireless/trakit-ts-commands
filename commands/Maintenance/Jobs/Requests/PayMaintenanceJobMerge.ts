import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamMaintenanceJobMerge } from "./Parameters/ParamMaintenanceJobMerge";
import { RepMaintenanceJobMerge } from "../Responses/RepMaintenanceJobMerge";

/**
 * Creates a new or updates an existing {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link MaintenanceJob}.
	 **/
	maintenanceJob: ParamMaintenanceJobMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceJob = new ParamMaintenanceJobMerge(json?.maintenanceJob as JsonObject);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.maintenanceJob?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceJobMerge(json as JsonObject);
	}
}