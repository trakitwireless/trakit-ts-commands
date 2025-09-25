import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceJobDelete } from "../Responses/RepMaintenanceJobDelete";
import { PayMaintenanceJob } from "./PayMaintenanceJob";

/**
 * Restores a deleted {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobRestore extends PayMaintenanceJob { 
	override createReply(json: any): Reply {
		return new RepMaintenanceJobDelete(json);
	}
}