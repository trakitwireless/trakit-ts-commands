import { Reply } from "../../../API/Responses/Reply";
import { RepReportScheduleDelete } from "../Responses/RepReportScheduleDelete";
import { PayReportSchedule } from "./PayReportSchedule";

/**
 * Restores a deleted {@link ReportSchedule}.
 **/
export class PayReportScheduleRestore extends PayReportSchedule { 
	override createReply(json: JsonObject): Reply {
		return new RepReportScheduleDelete(json as JsonObject);
	}
}