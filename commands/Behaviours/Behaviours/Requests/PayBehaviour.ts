import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";

/**
 * A container for the {@link behaviour} object.
 **/
export abstract class PayBehaviour extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Behaviour}.
	 **/
	behaviour: ParamId;

	constructor(json?: any) {
		super(json);
		this.behaviour = new ParamId(json?.behaviour);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.behaviour?.id?.toString() ?? "";
	}
}