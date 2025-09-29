import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportScheduleBatchDelete } from "../Responses/RepReportScheduleBatchDelete";

/**
 * 
 **/
export class PayReportScheduleBatchDelete extends Payload {
	/**
	 * 
	 **/
	reportSchedules: ParamId[];

	constructor(json?: JsonObject) {
		super();
		this.reportSchedules = json?.reportSchedules?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepReportScheduleBatchDelete(json);
	}
}