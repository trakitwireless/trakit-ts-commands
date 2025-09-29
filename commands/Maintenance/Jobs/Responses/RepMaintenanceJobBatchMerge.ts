import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * 
 **/
export class RepMaintenanceJobBatchMerge extends Reply {
	/**
	 * 
	 **/
	maintenanceJobs: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceJobs = json?.maintenanceJobs?.map((item: any) => new ContentIdCompany(item));
	}
}