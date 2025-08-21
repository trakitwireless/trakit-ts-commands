import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceScheduleList } from "./RepMaintenanceScheduleList";

/**
 * A container for the requested <see cref="maintenanceSchedules"/>.
 **/
export abstract class RepMaintenanceScheduleList extends Reply {
	/**
	 * The list of requested <see cref="MaintenanceSchedule"/>s.
	 **/
	maintenanceSchedules: MaintenanceSchedule[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepMaintenanceScheduleListByCompany extends RepMaintenanceScheduleList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}