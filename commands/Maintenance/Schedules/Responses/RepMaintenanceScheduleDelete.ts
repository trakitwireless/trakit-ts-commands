import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="maintenanceSchedule"/>.
 **/
export class RepMaintenanceScheduleDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="MaintenanceSchedule"/>.
	 **/
	maintenanceSchedule: ContentIdDeleted;}