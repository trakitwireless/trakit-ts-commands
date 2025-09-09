import { ParamKey } from "../../../API/Requests/Parameters/ParamKey";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link machine} object.
 **/
export abstract class PayMachine extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Machine}.
	 **/
	machine: ParamKey;

	constructor(json: any) {
		super(json);
		this.machine = new ParamKey(json?.machine);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.machine?.key ?? "";
	}
}