import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportTemplateMerge } from "./Parameters/ParamReportTemplateMerge";

/**
 * Creates a new or updates an existing {@link ReportTemplate}.
 **/
export class PayReportTemplateMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ReportTemplate}.
	 **/
	reportTemplate: ParamReportTemplateMerge;

	constructor(json: any) {
		super(json);
		this.reportTemplate = new ParamReportTemplateMerge(json?.reportTemplate);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.reportTemplate?.id?.toString() ?? "";
	}
}