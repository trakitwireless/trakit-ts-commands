import { JsonObject } from "@trakit/objects";
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

	constructor(json?: JsonObject) {
		super();
		this.reportResults = (json?.reportResults as JsonObject[])?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportResultBatchDelete(json);
	}
}