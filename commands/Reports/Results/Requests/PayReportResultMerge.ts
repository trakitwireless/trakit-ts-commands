import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing @link {ReportResult}.
 **/
export class PayReportResultMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a @link {ReportResult}.
	 **/
	reportResult: ParamReportResultMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.reportResult?.id?.ToString() ?? "";
		}}