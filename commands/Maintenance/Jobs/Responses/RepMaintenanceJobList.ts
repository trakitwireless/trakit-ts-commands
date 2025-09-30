import { JsonObject, MaintenanceJob, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link maintenanceJobs}.
 **/
export abstract class RepMaintenanceJobList extends Reply {
	/**
	 * The list of requested {@link MaintenanceJob}s.
	 **/
	maintenanceJobs: MaintenanceJob[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.maintenanceJobs = (json?.maintenanceJobs as JsonObject[])?.map((item: any) => new MaintenanceJob(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepMaintenanceJobListByCompany extends RepMaintenanceJobList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}