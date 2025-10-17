import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportResultMerge } from "./Parameters/ParamReportResultMerge";
import { RepReportResultMerge } from "../Responses/RepReportResultMerge";

/**
 * Creates a new or updates an existing {@link ReportResult}.
 **/
export class PayReportResultMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ReportResult}.
	 **/
	reportResult: ParamReportResultMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.reportResult = new ParamReportResultMerge(json?.reportResult as JsonObject);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.reportResult?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportResultMerge(json);
	}
}