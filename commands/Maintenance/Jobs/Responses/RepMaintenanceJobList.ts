import { Reply } from "../../../API/Responses/Reply";
import { RepMaintenanceJobList } from "./RepMaintenanceJobList";

/**
 * A container for the requested {@link maintenanceJobs}.
 **/
export abstract class RepMaintenanceJobList extends Reply {
	/**
	 * The list of requested {@link MaintenanceJob}s.
	 **/
	maintenanceJobs: MaintenanceJob[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMaintenanceJobListByCompany extends RepMaintenanceJobList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}