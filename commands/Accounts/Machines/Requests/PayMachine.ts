import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link machine} object.
 **/
export abstract class PayMachine extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Machine}.
	 **/
	machine: ParamKey;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.machine?.key ?? "";
		}}