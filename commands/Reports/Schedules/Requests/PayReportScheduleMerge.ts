import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportScheduleMerge } from "./Parameters/ParamReportScheduleMerge";
import { RepReportScheduleMerge } from "../Responses/RepReportScheduleMerge";

/**
 * Creates a new or updates an existing {@link ReportSchedule}.
 */
export class PayReportScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ReportSchedule}.
	 */
	reportSchedule: ParamReportScheduleMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.reportSchedule = new ParamReportScheduleMerge(json?.reportSchedule as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.reportSchedule?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportScheduleMerge(json);
	}
}