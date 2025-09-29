import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link reportTemplate}.
 **/
export class RepReportTemplateBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportTemplate}.
	 **/
	reportTemplates: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportTemplates = json?.reportTemplates?.map((e: any) => new ContentIdDeleted(e));
	}
}