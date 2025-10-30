import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceJob}.
	 **/
	maintenanceJobs: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "MaintenanceJob");
		this.maintenanceJobs = (json?.maintenanceJobs as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
	protected override _getKeys() { return this.maintenanceJobs?.map(m => m.id) as ulong[]; }
}