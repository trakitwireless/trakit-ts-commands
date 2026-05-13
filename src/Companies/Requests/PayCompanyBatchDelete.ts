import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyBatchDelete } from "../Responses/RepCompanyBatchDelete";

/**
 * 
 */
export class PayCompanyBatchDelete extends Payload {
	/**
	 * 
	 */
	companies: ParamId[];

	constructor(json?: JsonObject) {
		super();
		this.companies = (json?.companies as JsonObject[])?.map((c: any) => new ParamId(c)) ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyBatchDelete(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			companies: this.companies.map(c => c.toJSON()),
		};
	}
}