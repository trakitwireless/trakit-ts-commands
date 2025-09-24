import { PayReportSchedule } from "./PayReportSchedule";

/**
 * Restores a deleted {@link ReportSchedule}.
 **/
export class PayReportScheduleRestore extends PayReportSchedule { 
	override createReply(json: any): Reply {
		return new RepReportScheduleRestore(json);
	}
}