import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepMaintenanceJobBatchDelete } from "../Responses/RepMaintenanceJobBatchDelete";

/**
 * 
 */
export class PayMaintenanceJobBatchDelete extends Payload {
	/**
	 * 
	 */
	maintenanceJobs: ParamId[];

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceJobs = (json?.maintenanceJobs as JsonObject[])?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceJobBatchDelete(json);
	}
}