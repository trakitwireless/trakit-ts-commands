import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link ReportSchedule}.
 **/
export class PayReportScheduleMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ReportSchedule}.
	 **/
	reportSchedule: ParamReportScheduleMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.reportSchedule?.id?.toString() ?? "";
		}}