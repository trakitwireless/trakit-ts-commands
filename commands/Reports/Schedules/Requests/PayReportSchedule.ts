import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link reportSchedule} object.
 **/
export abstract class PayReportSchedule extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ReportSchedule}.
	 **/
	reportSchedule: ParamId;

	constructor(json: any) {
		super();
		this.reportSchedule = new ParamId(json?.reportSchedule);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.reportSchedule?.id?.toString() ?? "";
	}
}