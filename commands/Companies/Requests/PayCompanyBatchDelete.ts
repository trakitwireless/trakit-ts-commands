import { Reply } from "../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { RepCompanyBatchDelete } from "../Responses/RepCompanyBatchDelete";

/**
 * 
 **/
export class PayCompanyBatchDelete extends Payload {
	/**
	 * 
	 **/
	companies: ParamId[];

	constructor(json: any) {
		super();
		this.companies = json?.companies?.map((c: any) => new ParamId(c)) ?? [];
	}

	override createReply(json: any): Reply {
		return new RepCompanyBatchDelete(json);
	}
}