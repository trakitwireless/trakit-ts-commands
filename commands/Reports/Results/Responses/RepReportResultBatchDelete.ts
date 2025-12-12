import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ReportResult}.
	 **/
	reportResults: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportResult");
		this.reportResults = (json.reportResults as JsonObject[])?.map((e: any) => new ContentIdDeleted(e));
	}
	protected override _getKeys() { return this.reportResults?.map(r => r.id) as ulong[]; }
	override getCompanyId() { return this.reportResults?.[0]?.company as ulong; }
	override getResults() { return this.reportResults as ContentIdDeleted[]; }
}