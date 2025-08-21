import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {reportResult}.
 **/
export class RepReportResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {ReportResult}.
	 **/
	reportResults: ContentIdDeleted[];}