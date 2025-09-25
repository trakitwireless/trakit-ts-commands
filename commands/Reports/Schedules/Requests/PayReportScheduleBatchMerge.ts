import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportScheduleBatchMerge } from "../Responses/RepReportScheduleBatchMerge";
import { ParamReportScheduleMerge } from "./Parameters/ParamReportScheduleMerge";

/**
 * 
 **/
export class PayReportScheduleBatchMerge extends Payload {
	/**
	 * 
	 **/
	reportSchedules: ParamReportScheduleMerge[];

	constructor(json: any) {
		super(json);
		this.reportSchedules = json?.reportSchedules?.map((e: any) => new ParamReportScheduleMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepReportScheduleBatchMerge(json);
	}
}