import { Payload } from "../../../API/Requests/Payload";
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
}