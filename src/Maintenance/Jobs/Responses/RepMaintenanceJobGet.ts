import { JsonObject, MaintenanceJob, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link maintenanceJob}.
 */
export class RepMaintenanceJobGet extends ReplySyncGet<MaintenanceJob> {
	/**
	 * The requested {@link MaintenanceJob}.
	 */
	maintenanceJob: MaintenanceJob | nothing;

	constructor(json: JsonObject) {
		super(json, "MaintenanceJob");
		if (json?.maintenanceJob) {
			this.maintenanceJob = new MaintenanceJob(json.maintenanceJob as JsonObject);
		}
	}
	override getObject() { return this.maintenanceJob as MaintenanceJob; }
	override getCompanyId() { return this.maintenanceJob?.companyId as ulong; }
}