import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamReportTemplateMerge } from "./Parameters/ParamReportTemplateMerge";
import { RepReportTemplateMerge } from "../Responses/RepReportTemplateMerge";

/**
 * Creates a new or updates an existing {@link ReportTemplate}.
 */
export class PayReportTemplateMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link ReportTemplate}.
	 */
	reportTemplate: ParamReportTemplateMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.reportTemplate = new ParamReportTemplateMerge(json?.reportTemplate as JsonObject);
	}
	/**
	 * 
	 */
	getKey(): string {
		return this.reportTemplate?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepReportTemplateMerge(json);
	}
}