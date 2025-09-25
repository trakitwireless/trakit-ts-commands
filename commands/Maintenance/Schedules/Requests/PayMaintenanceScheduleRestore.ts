import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceScheduleDelete } from "../Responses/RepMaintenanceScheduleDelete";
import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";

/**
 * Restores a deleted {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleRestore extends PayMaintenanceSchedule { 
	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleDelete(json);
	}
}