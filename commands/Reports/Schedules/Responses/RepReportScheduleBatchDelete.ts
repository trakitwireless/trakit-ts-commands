import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportSchedule}.
	 **/
	reportSchedules: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportSchedules = json?.reportSchedules?.map((e: any) => new ContentIdDeleted(e));
	}
}