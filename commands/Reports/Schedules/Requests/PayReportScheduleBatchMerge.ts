import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportScheduleBatchMerge } from "../Responses/RepReportScheduleBatchMerge";
import { ParamReportScheduleMerge } from "./Parameters/ParamReportScheduleMerge";

/**
 * 
 */
export class PayReportScheduleBatchMerge extends Payload {
	/**
	 * 
	 */
	reportSchedules: ParamReportScheduleMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.reportSchedules = (json?.reportSchedules as JsonObject[])?.map((e: any) => new ParamReportScheduleMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportScheduleBatchMerge(json);
	}
}