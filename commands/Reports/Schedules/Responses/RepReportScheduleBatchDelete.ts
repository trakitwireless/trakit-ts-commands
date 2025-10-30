import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link ReportSchedule}.
	 **/
	reportSchedules: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportSchedule");
		this.reportSchedules = (json?.reportSchedules as JsonObject[])?.map((e: any) => new ContentIdDeleted(e));
	}
	protected override _getKeys() { return this.reportSchedules?.map((e) => e.id) as ulong[]; }
}