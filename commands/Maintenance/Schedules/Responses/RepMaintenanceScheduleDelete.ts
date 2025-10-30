import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedule: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceSchedule = ContentIdDeleted.fromJSON(json?.maintenanceSchedule as JsonObject);
	}
}