import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyMerge } from "../Responses/RepCompanyMerge";
import { ParamCompanyMerge } from "./Parameters/ParamCompanyMerge";

/**
 * Creates a new or updates an existing {@link Company}.
 **/
export class PayCompanyMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Company}.
	 **/
	company: ParamCompanyMerge;

	constructor(json?: JsonObject) {
		super();
		this.company = new ParamCompanyMerge(json?.company as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.company?.id?.toString() ?? "";
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyMerge(json);
	}
}