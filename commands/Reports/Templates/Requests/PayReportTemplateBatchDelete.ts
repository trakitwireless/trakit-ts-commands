import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportTemplateBatchDelete } from "../Responses/RepReportTemplateBatchDelete";

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

	override createReply(json: any): Reply {
		return new RepReportTemplateBatchDelete(json);
	}
}