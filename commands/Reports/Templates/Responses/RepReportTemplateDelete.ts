import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link reportTemplate}.
 **/
export class RepReportTemplateDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ReportTemplate}.
	 **/
	reportTemplate: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportTemplate");
		this.reportTemplate = ContentIdDeleted.fromJSON(json?.reportTemplate as JsonObject);
	}
	override getKey() { return this.reportTemplate?.id as ulong; }
	override getCompanyId() { return this.reportTemplate?.company as ulong; }
}