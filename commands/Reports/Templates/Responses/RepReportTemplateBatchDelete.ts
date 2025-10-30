import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link reportTemplate}.
 **/
export class RepReportTemplateBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ReportTemplate}.
	 **/
	reportTemplates: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportTemplate");
		this.reportTemplates = (json?.reportTemplates as JsonObject[])?.map((e: any) => new ContentIdDeleted(e));
	}
	protected override _getKeys() { return this.reportTemplates?.map((e) => e.id) as ulong[]; }
}