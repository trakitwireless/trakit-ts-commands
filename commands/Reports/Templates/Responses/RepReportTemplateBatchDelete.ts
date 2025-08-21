import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {reportTemplate}.
 **/
export class RepReportTemplateBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {ReportTemplate}.
	 **/
	reportTemplates: ContentIdDeleted[];}