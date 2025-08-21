import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportSchedule}.
	 **/
	reportSchedules: ContentIdDeleted[];}