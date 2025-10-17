import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepMaintenanceScheduleBatchMerge } from "../Responses/RepMaintenanceScheduleBatchMerge";
import { ParamMaintenanceScheduleMerge } from "./Parameters/ParamMaintenanceScheduleMerge";

/**
 * 
 **/
export class PayMaintenanceScheduleBatchMerge extends Payload {
	/**
	 * 
	 **/
	maintenanceSchedules: ParamMaintenanceScheduleMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.maintenanceSchedules = (json?.maintenanceSchedules as JsonObject[])?.map((item: any) => new ParamMaintenanceScheduleMerge(item)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceScheduleBatchMerge(json);
	}
}