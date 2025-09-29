import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { RepCompanyBatchMerge } from "../Responses/RepCompanyBatchMerge";
import { ParamCompanyMerge } from "./Parameters/ParamCompanyMerge";

/**
 * 
 **/
export class PayCompanyBatchMerge extends Payload {
	/**
	 * 
	 **/
	companies: ParamCompanyMerge[];

	constructor(json?: JsonObject) {
		super();
		this.companies = json?.companies?.map((c: any) => new ParamCompanyMerge(c)) ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyBatchMerge(json);
	}
}