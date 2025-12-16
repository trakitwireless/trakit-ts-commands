import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportResultBatchMerge } from "../Responses/RepReportResultBatchMerge";
import { ParamReportResultMerge } from "./Parameters/ParamReportResultMerge";

/**
 * 
 */
export class PayReportResultBatchMerge extends Payload {
	/**
	 * 
	 */
	reportResults: ParamReportResultMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.reportResults = (json?.reportResults as JsonObject[])?.map((e: any) => new ParamReportResultMerge(e)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportResultBatchMerge(json);
	}
}