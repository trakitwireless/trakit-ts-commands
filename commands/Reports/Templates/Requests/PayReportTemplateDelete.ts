import { PayReportTemplate } from "./PayReportTemplate";

/**
 * Deletes an existing {@link ReportTemplate}.
 **/
export class PayReportTemplateDelete extends PayReportTemplate { 
	override createReply(json: any): Reply {
		return new RepReportTemplateDelete(json);
	}
}