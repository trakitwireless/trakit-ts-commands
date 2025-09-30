import { JsonObject, nothing, ReportSchedule } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleGet extends Reply {
	/**
	 * The requested {@link ReportSchedule}.
	 **/
	reportSchedule: ReportSchedule | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		if (json?.reportSchedule) {
			this.reportSchedule = new ReportSchedule(json.reportSchedule as JsonObject);
		}
	}
}