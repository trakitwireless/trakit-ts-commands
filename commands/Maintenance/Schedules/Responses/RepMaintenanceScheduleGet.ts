import { MaintenanceSchedule, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleGet extends Reply {
	/**
	 * The requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: MaintenanceSchedule | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceSchedule = json?.maintenanceSchedule
			? new MaintenanceSchedule(json.maintenanceSchedule)
			: null;
	}
}