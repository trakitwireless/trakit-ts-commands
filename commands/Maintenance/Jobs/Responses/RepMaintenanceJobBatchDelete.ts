import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects/objects/API/Types";

/**
 * A container for the {@link maintenanceJob}.
 **/
export class RepMaintenanceJobBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceJob}.
	 **/
	maintenanceJobs: ContentIdDeleted[] | nothing;

	constructor(json?: any) {
		super(json);
		this.maintenanceJobs = json?.maintenanceJobs?.map((item: any) => new ContentIdDeleted(item));
	}
}