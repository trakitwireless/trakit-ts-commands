import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="ReportTemplate"/>.
 **/
export class PayReportTemplateMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="ReportTemplate"/>.
	 **/
	reportTemplate: ParamReportTemplateMerge;

	/**
		///
	 **/
		getKey(): string {
			return  this.reportTemplate?.id?.ToString() ?? "";
		}}