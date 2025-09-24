import { PayMaintenanceJob } from "./PayMaintenanceJob";

/**
 * Restores a deleted {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobRestore extends PayMaintenanceJob { 
	override createReply(json: any): Reply {
		return new RepMaintenanceJobRestore(json);
	}
}