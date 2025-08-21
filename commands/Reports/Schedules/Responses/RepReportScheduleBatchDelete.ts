import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="reportSchedule"/>.
 **/
export class RepReportScheduleBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ReportSchedule"/>.
	 **/
	reportSchedules: ContentIdDeleted[];}