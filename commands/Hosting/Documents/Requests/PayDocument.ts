import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link document} object.
 **/
export abstract class PayDocument extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Document}.
	 **/
	document: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.document = new ParamId(json?.document as JsonObject);
	}
	
	/**
	 * 
	 **/
	getKey(): string {
		return this.document?.id?.toString() ?? "";
	}
}