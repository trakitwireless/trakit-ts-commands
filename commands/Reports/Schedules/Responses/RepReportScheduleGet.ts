import { JsonObject, nothing, ReportSchedule } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link reportSchedule}.
 **/
export class RepReportScheduleGet extends ReplySyncGet<ReportSchedule> {
	/**
	 * The requested {@link ReportSchedule}.
	 **/
	reportSchedule: ReportSchedule | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportSchedule");
		if (json?.reportSchedule) {
			this.reportSchedule = new ReportSchedule(json.reportSchedule as JsonObject);
		}
	}
	override getObject() { return this.reportSchedule as ReportSchedule; }
}