import { Payload } from "../../../API/Requests/Payload";
import { ParamMaintenanceJobMerge } from "./Parameters/ParamMaintenanceJobMerge";

/**
 * 
 **/
export class PayMaintenanceJobBatchMerge extends Payload {
	/**
	 * 
	 **/
	maintenanceJobs: ParamMaintenanceJobMerge[];

	constructor(json?: any) {
		super(json);
		this.maintenanceJobs = json?.maintenanceJobs?.map((item: any) => new ParamMaintenanceJobMerge(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepMaintenanceJobBatchMerge(json);
	}
}