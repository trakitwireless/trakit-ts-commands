import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="maintenanceSchedule"/>.
 **/
export class RepMaintenanceScheduleBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="MaintenanceSchedule"/>.
	 **/
	maintenanceSchedules: ContentIdDeleted[];}