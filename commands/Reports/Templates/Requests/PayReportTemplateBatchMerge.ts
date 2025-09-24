import { Payload } from "../../../API/Requests/Payload";
import { ParamReportTemplateMerge } from "./Parameters/ParamReportTemplateMerge";

/**
 * 
 **/
export class PayReportTemplateBatchMerge extends Payload {
	/**
	 * 
	 **/
	reportTemplates: ParamReportTemplateMerge[];

	constructor(json: any) {
		super(json);
		this.reportTemplates = json?.reportTemplates?.map((e: any) => new ParamReportTemplateMerge(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepReportTemplateBatchMerge(json);
	}
}