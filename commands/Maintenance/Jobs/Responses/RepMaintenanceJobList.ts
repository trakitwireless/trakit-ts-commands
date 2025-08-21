import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceJobList } from "./RepMaintenanceJobList";

/**
 * A container for the requested <see cref="maintenanceJobs"/>.
 **/
export abstract class RepMaintenanceJobList extends Reply {
	/**
	 * The list of requested <see cref="MaintenanceJob"/>s.
	 **/
	maintenanceJobs: MaintenanceJob[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepMaintenanceJobListByCompany extends RepMaintenanceJobList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}