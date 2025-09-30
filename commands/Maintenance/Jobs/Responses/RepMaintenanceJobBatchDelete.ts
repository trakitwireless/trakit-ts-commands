import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceJob}.
	 **/
	maintenanceJobs: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceJobs = (json?.maintenanceJobs as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}