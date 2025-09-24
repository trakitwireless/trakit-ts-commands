import { PayMaintenanceSchedule } from "./PayMaintenanceSchedule";

/**
 * Restores a deleted {@link MaintenanceSchedule}.
 **/
export class PayMaintenanceScheduleRestore extends PayMaintenanceSchedule { 
	override createReply(json: any): Reply {
		return new RepMaintenanceScheduleRestore(json);
	}
}