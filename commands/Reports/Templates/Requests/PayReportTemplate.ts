import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link reportTemplate} object.
 **/
export abstract class PayReportTemplate extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link ReportTemplate}.
	 **/
	reportTemplate: ParamId;

	constructor(json: any) {
		super();
		this.reportTemplate = new ParamId(json?.reportTemplate);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.reportTemplate?.id?.toString() ?? "";
	}
}