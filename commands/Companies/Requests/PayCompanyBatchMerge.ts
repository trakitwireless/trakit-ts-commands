import { Payload } from "../../API/Requests/Payload";
import { ParamCompanyMerge } from "./Parameters/ParamCompanyMerge";

/**
 * 
 **/
export class PayCompanyBatchMerge extends Payload {
	/**
	 * 
	 **/
	companies: ParamCompanyMerge[];

	constructor(json: any) {
		super();
		this.companies = json?.companies?.map((c: any) => new ParamCompanyMerge(c)) ?? [];
	}
}