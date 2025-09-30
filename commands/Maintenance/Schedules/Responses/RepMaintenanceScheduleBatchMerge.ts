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

	constructor(json: JsonObject) {
		super(json);
		this.maintenanceSchedules = (json?.maintenanceSchedules as JsonObject[])?.map((item: any) => new ContentIdCompany(item)) ;
	}
}