import { nothing, ReportSchedule } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleGet extends Reply {
	/**
	 * The requested {@link ReportSchedule}.
	 **/
	reportSchedule: ReportSchedule | nothing;
	
	constructor(json: any) {
		super(json);
		this.reportSchedule = json?.reportSchedule
			? new ReportSchedule(json.reportSchedule)
			: null;
	}
}