import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {maintenanceJob}.
 **/
export class RepMaintenanceJobBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {MaintenanceJob}.
	 **/
	maintenanceJobs: ContentIdDeleted[];}