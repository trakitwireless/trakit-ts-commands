import { JsonObject, nothing } from "@trakit/objects";
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
		super(json);
		this.reportTemplate = ContentIdDeleted.fromJSON(json?.reportTemplate as JsonObject);
	}
}