import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepReportTemplateBatchMerge } from "../Responses/RepReportTemplateBatchMerge";
import { ParamReportTemplateMerge } from "./Parameters/ParamReportTemplateMerge";

/**
 * 
 **/
export class PayReportTemplateBatchMerge extends Payload {
	/**
	 * 
	 **/
	reportTemplates: ParamReportTemplateMerge[];

	constructor(json?: JsonObject) {
		super(json);
		this.reportTemplates = json?.reportTemplates?.map((e: any) => new ParamReportTemplateMerge(e)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepReportTemplateBatchMerge(json);
	}
}