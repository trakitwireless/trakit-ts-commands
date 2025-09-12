import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link contact} object.
 **/
export abstract class PayContact extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Contact}.
	 **/
	contact: ParamId;

	constructor(json: any) {
		super(json);
		this.contact = new ParamId(json?.contact);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.contact?.id?.toString() ?? "";
	}
}