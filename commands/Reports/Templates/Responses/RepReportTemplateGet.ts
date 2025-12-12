import { JsonObject, nothing, ReportTemplate, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link reportTemplate}.
 **/
export class RepReportTemplateGet extends ReplySyncGet<ReportTemplate> {
	/**
	 * The requested {@link ReportTemplate}.
	 **/
	reportTemplate: ReportTemplate | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportTemplate");
		if (json?.reportTemplate) {
			this.reportTemplate = new ReportTemplate(json.reportTemplate as JsonObject);
		}
	}
	override getObject() { return this.reportTemplate as ReportTemplate; }
	override getCompanyId() { return this.reportTemplate?.companyId as ulong; }
}