import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedules: ContentIdDeleted[];}