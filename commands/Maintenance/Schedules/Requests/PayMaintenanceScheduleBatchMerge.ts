import { Payload } from "../../../API/Requests/Payload";
import { ParamMaintenanceScheduleMerge } from "./Parameters/ParamMaintenanceScheduleMerge";

/**
 * 
 **/
export class PayMaintenanceScheduleBatchMerge extends Payload {
	/**
	 * 
	 **/
	maintenanceSchedules: ParamMaintenanceScheduleMerge[];

	constructor(json?: any) {
		super(json);
		this.maintenanceSchedules = json?.maintenanceSchedules?.map((item: any) => new ParamMaintenanceScheduleMerge(item)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleBatchMerge(json);
	}
}