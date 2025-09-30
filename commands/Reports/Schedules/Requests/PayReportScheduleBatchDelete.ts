import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
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
		this.reportSchedules = (json?.reportSchedules as JsonObject[])?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportScheduleBatchDelete(json as JsonObject);
	}
}