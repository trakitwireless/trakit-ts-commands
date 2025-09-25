import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportResultBatchDelete } from "../Responses/RepReportResultBatchDelete";

/**
 * 
 **/
export class PayReportResultBatchDelete extends Payload {
	/**
	 * 
	 **/
	reportResults: ParamId[];

	constructor(json: any) {
		super();
		this.reportResults = json?.reportResults?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepReportResultBatchDelete(json);
	}
}