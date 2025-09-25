import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceScheduleDelete } from "../Responses/RepMaintenanceScheduleDelete";
import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";

/**
 * Deletes an existing {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleDelete extends PayMaintenanceSchedule { 
	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleDelete(json);
	}
}