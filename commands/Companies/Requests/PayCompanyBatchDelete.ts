import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

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
}