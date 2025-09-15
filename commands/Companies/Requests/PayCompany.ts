import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link company} object.
 **/
export abstract class PayCompany extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Company}.
	 **/
	company: ParamId;

	constructor(json: any) {
		super();
		this.company = new ParamId(json?.company);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.company?.id?.toString() ?? "";
	}
}