import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * 
 **/
export class PayReportScheduleBatchDelete extends Payload {
	/**
	 * 
	 **/
	reportSchedules: ParamId[];

	constructor(json: any) {
		super();
		this.reportSchedules = json?.reportSchedules?.map((e: any) => new ParamId(e)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepReportScheduleBatchDelete(json);
	}
}