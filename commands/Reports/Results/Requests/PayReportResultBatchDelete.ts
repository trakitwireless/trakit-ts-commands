import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

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