import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link reportSchedule} object.
 **/
export abstract class PayReportSchedule extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ReportSchedule}.
	 **/
	reportSchedule: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.reportSchedule?.id.ToString() ?? "";
		}}