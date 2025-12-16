import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";

/**
 * A container for the {@link company} object.
 */
export abstract class PayCompany extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Company}.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super();
		this.company = new ParamId(json?.company as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.company?.id?.toString() ?? "";
	}
}