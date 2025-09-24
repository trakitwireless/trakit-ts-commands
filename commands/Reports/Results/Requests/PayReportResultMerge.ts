import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportResultMerge } from "./Parameters/ParamReportResultMerge";

/**
 * Creates a new or updates an existing {@link ReportResult}.
 **/
export class PayReportResultMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ReportResult}.
	 **/
	reportResult: ParamReportResultMerge;

	constructor(json: any) {
		super(json);
		this.reportResult = new ParamReportResultMerge(json?.reportResult);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.reportResult?.id?.toString() ?? "";
	}

	override createReply(json: any): Reply {
		return new RepReportResultMerge(json);
	}
}