import { Reply } from "../../../API/Responses/Reply";
import { RepReportTemplateDelete } from "../Responses/RepReportTemplateDelete";
import { PayReportTemplate } from "./PayReportTemplate";

/**
 * Restores a deleted {@link ReportTemplate}.
 **/
export class PayReportTemplateRestore extends PayReportTemplate { 
	override createReply(json?: JsonObject): Reply {
		return new RepReportTemplateDelete(json);
	}
}