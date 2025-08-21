import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="reportTemplate"/> object.
 **/
export abstract class PayReportTemplate extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="ReportTemplate"/>.
	 **/
	reportTemplate: ParamId;

	/**
		///
	 **/
		getKey(): string {
			return  this.reportTemplate?.id.ToString() ?? "";
		}}