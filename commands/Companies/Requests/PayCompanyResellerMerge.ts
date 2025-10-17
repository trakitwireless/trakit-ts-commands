import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { ParamCompanyResellerMerge } from "./Parameters/ParamCompanyResellerMerge";
import { RepCompanyResellerMerge } from "./Responses/RepCompanyResellerMerge";

/**
 * Creates a new or updates an existing {@link Company}.
 **/
export class PayCompanyResellerMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Company}.
	 **/
	companyReseller: ParamCompanyResellerMerge;

	constructor(json?: JsonObject) {
		super();
		this.companyReseller = new ParamCompanyResellerMerge(json?.companyReseller as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.companyReseller?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyResellerMerge(json as JsonObject);
	}
}