import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepReportScheduleBatchMerge extends Reply {
	/**
	 * 
	 **/
	reportSchedules: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.reportSchedules = json?.reportSchedules?.map((e: any) => new ContentIdCompany(e));
	}
}