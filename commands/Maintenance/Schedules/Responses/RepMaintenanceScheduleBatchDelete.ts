import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link maintenanceSchedule}.
 **/
export class RepMaintenanceScheduleBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
	 **/
	maintenanceSchedules: ContentIdDeleted[] | nothing;

	constructor(json?: any) {
		super(json);
		this.maintenanceSchedules = json?.maintenanceSchedules?.map((item: any) => new ContentIdDeleted(item)) ;
	}
}