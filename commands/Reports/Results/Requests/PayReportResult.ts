import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="reportResult"/> object.
 **/
export abstract class PayReportResult extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="ReportResult"/>.
	 **/
	reportResult: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.reportResult?.id.ToString() ?? "";
		}}