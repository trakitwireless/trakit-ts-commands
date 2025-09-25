import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepMaintenanceJobBatchDelete } from "../Responses/RepMaintenanceJobBatchDelete";

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

	override createReply(json: any): Reply {
		return new RepMaintenanceJobBatchDelete(json);
	}
}