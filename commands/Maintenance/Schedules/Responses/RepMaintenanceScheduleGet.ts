import { JsonObject, MaintenanceSchedule, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleGet extends ReplySyncGet<MaintenanceSchedule> {
	/**
	 * The requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: MaintenanceSchedule | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.maintenanceSchedule) {
			this.maintenanceSchedule = new MaintenanceSchedule(json.maintenanceSchedule as JsonObject);
		}
	}
}