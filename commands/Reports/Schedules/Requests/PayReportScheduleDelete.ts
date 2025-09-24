import { PayReportSchedule } from "./PayReportSchedule";

/**
 * Deletes an existing {@link ReportSchedule}.
 **/
export class PayReportScheduleDelete extends PayReportSchedule { 
	override createReply(json: any): Reply {
		return new RepReportScheduleDelete(json);
	}
}