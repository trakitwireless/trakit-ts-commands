import { PayReportResult } from "./PayReportResult";

/**
 * Restores a deleted {@link ReportResult}.
 **/
export class PayReportResultRestore extends PayReportResult { 
	override createReply(json: any): Reply {
		return new RepReportResultRestore(json);
	}
}