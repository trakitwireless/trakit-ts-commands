import { Payload } from "../../../API/Requests/Payload";
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
}