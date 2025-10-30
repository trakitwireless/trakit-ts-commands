import { JsonObject, MaintenanceSchedule, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link maintenanceSchedules}.
 **/
export abstract class RepMaintenanceScheduleList extends ReplySyncList<MaintenanceSchedule> {
	/**
	 * The list of requested {@link MaintenanceSchedule}s.
	 **/
	maintenanceSchedules: MaintenanceSchedule[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "MaintenanceSchedule");
		this.maintenanceSchedules = (json?.maintenanceSchedules as JsonObject[])?.map((item: any) => new MaintenanceSchedule(item));
	}
	override getCollection() { return this.maintenanceSchedules as MaintenanceSchedule[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMaintenanceScheduleListByCompany extends RepMaintenanceScheduleList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}