import { PayReportResult } from "./PayReportResult";

/**
 * Deletes an existing {@link ReportResult}.
 **/
export class PayReportResultDelete extends PayReportResult { 
	override createReply(json: any): Reply {
		return new RepReportResultDelete(json);
	}
}