import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedules: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceSchedules = (json?.maintenanceSchedules as JsonObject[])?.map((item: any) => new ContentIdDeleted(item)) ;
	}
}