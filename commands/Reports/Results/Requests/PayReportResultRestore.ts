import { Reply } from "../../../API/Responses/Reply";
import { RepReportResultDelete } from "../Responses/RepReportResultDelete";
import { PayReportResult } from "./PayReportResult";

/**
 * Restores a deleted {@link ReportResult}.
 **/
export class PayReportResultRestore extends PayReportResult { 
	override createReply(json: any): Reply {
		return new RepReportResultDelete(json);
	}
}