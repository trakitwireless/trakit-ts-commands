import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="maintenanceJob"/>.
 **/
export class RepMaintenanceJobDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="MaintenanceJob"/>.
	 **/
	maintenanceJob: ContentIdDeleted;}