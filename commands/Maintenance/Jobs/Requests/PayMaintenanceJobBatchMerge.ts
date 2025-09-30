import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepMaintenanceJobBatchMerge } from "../Responses/RepMaintenanceJobBatchMerge";
import { ParamMaintenanceJobMerge } from "./Parameters/ParamMaintenanceJobMerge";

/**
 * 
 **/
export class PayMaintenanceJobBatchMerge extends Payload {
	/**
	 * 
	 **/
	maintenanceJobs: ParamMaintenanceJobMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceJobs = (json?.maintenanceJobs as JsonObject[])?.map((item: any) => new ParamMaintenanceJobMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceJobBatchMerge(json as JsonObject);
	}
}