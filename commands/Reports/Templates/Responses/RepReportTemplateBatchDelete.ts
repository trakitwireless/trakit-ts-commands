import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="reportTemplate"/>.
 **/
export class RepReportTemplateBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ReportTemplate"/>.
	 **/
	reportTemplates: ContentIdDeleted[];}