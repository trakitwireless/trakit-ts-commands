import { JsonObject } from "@trakit/objects";
import { RepReportTemplateDelete } from "../Responses/RepReportTemplateDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayReportTemplate } from "./PayReportTemplate";

/**
 * Deletes an existing {@link ReportTemplate}.
 **/
export class PayReportTemplateDelete extends PayReportTemplate { 
	override createReply(json: JsonObject): Reply {
		return new RepReportTemplateDelete(json as JsonObject);
	}
}