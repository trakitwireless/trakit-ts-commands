import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepMaintenanceJobBatchMerge extends Reply {
	/**
	 * 
	 **/
	maintenanceJobs: ContentIdCompany[] | nothing;

	constructor(json?: any) {
		super(json);
		this.maintenanceJobs = json?.maintenanceJobs?.map((item: any) => new ContentIdCompany(item));
	}
}