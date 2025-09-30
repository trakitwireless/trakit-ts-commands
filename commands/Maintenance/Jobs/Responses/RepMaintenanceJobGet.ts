import { JsonObject, MaintenanceJob, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobGet extends Reply {
	/**
	 * The requested {@link MaintenanceJob}.
	 **/
	maintenanceJob: MaintenanceJob | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.maintenanceJob) {
			this.maintenanceJob = new MaintenanceJob(json.maintenanceJob as JsonObject);
		}
	}
}