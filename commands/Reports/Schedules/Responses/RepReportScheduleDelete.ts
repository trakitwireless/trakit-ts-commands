import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ReportSchedule}.
	 **/
	reportSchedule: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportSchedule");
		this.reportSchedule = ContentIdDeleted.fromJSON(json?.reportSchedule as JsonObject);
	}
	override getKey() { return this.reportSchedule?.id as ulong; }
}