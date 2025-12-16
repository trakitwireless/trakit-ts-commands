import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link contact} object.
 */
export abstract class PayContact extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Contact}.
	 */
	contact: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.contact = new ParamId(json?.contact as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.contact?.id?.toString() ?? "";
	}
}