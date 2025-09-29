import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceSchedule = ContentIdDeleted.fromJSON(json?.maintenanceSchedule) ;
	}
}