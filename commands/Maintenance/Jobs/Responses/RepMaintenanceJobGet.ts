import { MaintenanceJob } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobGet extends Reply {
	/**
	 * The requested {@link MaintenanceJob}.
	 **/
	maintenanceJob: MaintenanceJob | nothing;

	constructor(json?: any) {
		super(json);
		this.maintenanceJob = json?.maintenanceJob
			? new MaintenanceJob(json.maintenanceJob)
			: null;
	}
}