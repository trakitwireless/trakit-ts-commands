import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="ReportSchedule"/>.
 **/
export class PayReportScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="ReportSchedule"/>.
	 **/
	reportSchedule: ParamReportScheduleMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.reportSchedule?.id?.ToString() ?? "";
		}}