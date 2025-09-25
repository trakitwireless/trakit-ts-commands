import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportResultBatchMerge } from "../Responses/RepReportResultBatchMerge";
import { ParamReportResultMerge } from "./Parameters/ParamReportResultMerge";

/**
 * 
 **/
export class PayReportResultBatchMerge extends Payload {
	/**
	 * 
	 **/
	reportResults: ParamReportResultMerge[];

	constructor(json: any) {
		super(json);
		this.reportResults = json?.reportResults?.map((e: any) => new ParamReportResultMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepReportResultBatchMerge(json);
	}
}