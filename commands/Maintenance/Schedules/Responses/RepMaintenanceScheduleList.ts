import { Reply } from "../../../API/Responses/Reply";
import { MaintenanceSchedule } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { nothing } from "@trakit/objects";
/**
 * A container for the requested {@link maintenanceSchedules}.
 **/
export abstract class RepMaintenanceScheduleList extends Reply {
	/**
	 * The list of requested {@link MaintenanceSchedule}s.
	 **/
	maintenanceSchedules: MaintenanceSchedule[] | nothing;
	
	constructor(json?: any) {
		super(json);
		this.maintenanceSchedules = json?.maintenanceSchedules?.map((item: any) => new MaintenanceSchedule(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMaintenanceScheduleListByCompany extends RepMaintenanceScheduleList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json?: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}