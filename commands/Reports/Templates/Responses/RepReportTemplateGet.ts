import { JsonObject } from "@trakit/objects";
import { nothing, ReportTemplate } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportTemplate}.
 **/
export class RepReportTemplateGet extends Reply {
	/**
	 * The requested {@link ReportTemplate}.
	 **/
	reportTemplate: ReportTemplate | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportTemplate = json?.reportTemplate
			? new ReportTemplate(json.reportTemplate)
			: null;
	}
}