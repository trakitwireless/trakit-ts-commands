import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

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
}