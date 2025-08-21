import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceScheduleList } from "./RepMaintenanceScheduleList";

/**
 * A container for the requested {@link maintenanceSchedules}.
 **/
export abstract class RepMaintenanceScheduleList extends Reply {
	/**
	 * The list of requested {@link MaintenanceSchedule}s.
	 **/
	maintenanceSchedules: MaintenanceSchedule[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMaintenanceScheduleListByCompany extends RepMaintenanceScheduleList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}