import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepMaintenanceScheduleBatchMerge extends Reply {
	/**
	 * 
	 **/
	maintenanceSchedules: ContentIdCompany[] | nothing;

	constructor(json?: any) {
		super(json);
		this.maintenanceSchedules = json?.maintenanceSchedules?.map((item: any) => new ContentIdCompany(item)) ;
	}
}