import { PayReportTemplate } from "./PayReportTemplate";

/**
 * Restores a deleted {@link ReportTemplate}.
 **/
export class PayReportTemplateRestore extends PayReportTemplate { 
	override createReply(json: any): Reply {
		return new RepReportTemplateRestore(json);
	}
}