import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayMaintenanceJobBatchDelete extends Payload {
	/**
	 * 
	 **/
	maintenanceJobs: ParamId[];

	constructor(json?: any) {
		super(json);
		this.maintenanceJobs = json?.maintenanceJobs?.map((item: any) => new ParamId(item)) ?? [];
	}
}