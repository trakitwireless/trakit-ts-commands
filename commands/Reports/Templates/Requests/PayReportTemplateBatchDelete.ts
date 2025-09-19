import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayReportTemplateBatchDelete extends Payload {
	/**
	 * 
	 **/
	reportTemplates: ParamId[];

	constructor(json: any) {
		super();
		this.reportTemplates = json?.reportTemplates?.map((e: any) => new ParamId(e)) ?? [];
	}
}