import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamCompanyMerge } from "./Parameters/ParamCompanyMerge";

/**
 * Creates a new or updates an existing {@link Company}.
 **/
export class PayCompanyMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Company}.
	 **/
	company: ParamCompanyMerge;

	constructor(json: any) {
		super();
		this.company = new ParamCompanyMerge(json?.company);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.company?.id?.toString() ?? "";
	}
}