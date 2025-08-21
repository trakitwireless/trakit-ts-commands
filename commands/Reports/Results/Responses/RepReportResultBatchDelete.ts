import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="reportResult"/>.
 **/
export class RepReportResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ReportResult"/>.
	 **/
	reportResults: ContentIdDeleted[];}