import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepMaintenanceScheduleBatchDelete } from "../Responses/RepMaintenanceScheduleBatchDelete";

/**
 * 
 **/
export class PayMaintenanceScheduleBatchDelete extends Payload {
	/**
	 * 
	 **/
	maintenanceSchedules: ParamId[];

	constructor(json?: any) {
		super(json);
		this.maintenanceSchedules = json?.maintenanceSchedules?.map((item: any) => new ParamId(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleBatchDelete(json);
	}
}