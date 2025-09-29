import { RepReportResultDelete } from "../Responses/RepReportResultDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayReportResult } from "./PayReportResult";

/**
 * Deletes an existing {@link ReportResult}.
 **/
export class PayReportResultDelete extends PayReportResult { 
	override createReply(json?: JsonObject): Reply {
		return new RepReportResultDelete(json);
	}
}