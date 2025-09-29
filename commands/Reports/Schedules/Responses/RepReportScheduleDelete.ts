import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportSchedule}.
	 **/
	reportSchedule: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportSchedule = ContentIdDeleted.fromJSON(json?.reportSchedule);
	}
}