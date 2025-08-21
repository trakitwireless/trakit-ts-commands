import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="ReportResult"/>.
 **/
export class PayReportResultMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="ReportResult"/>.
	 **/
	reportResult: ParamReportResultMerge;

	/**
		///
	 **/
		getKey(): string {
			return  this.reportResult?.id?.ToString() ?? "";
		}}