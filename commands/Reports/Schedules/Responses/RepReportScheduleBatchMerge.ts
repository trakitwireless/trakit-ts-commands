import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepReportScheduleBatchMerge extends Reply {
	/**
	 * 
	 **/
	reportSchedules: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.reportSchedules = (json?.reportSchedules as JsonObject[])?.map((e: any) => new ContentIdCompany(e));
	}
}