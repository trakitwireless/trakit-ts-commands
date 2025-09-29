import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link reportTemplate}.
 **/
export class RepReportTemplateDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportTemplate}.
	 **/
	reportTemplate: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportTemplate = ContentIdDeleted.fromJSON(json?.reportTemplate);
	}
}