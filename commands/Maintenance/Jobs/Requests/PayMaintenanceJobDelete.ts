import { RepMaintenanceJobDelete } from "../Responses/RepMaintenanceJobDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayMaintenanceJob } from "./PayMaintenanceJob";

/**
 * Deletes an existing {@link MaintenanceJob}.
 **/
export class PayMaintenanceJobDelete extends PayMaintenanceJob { 
	override createReply(json: JsonObject): Reply {
		return new RepMaintenanceJobDelete(json as JsonObject);
	}
}