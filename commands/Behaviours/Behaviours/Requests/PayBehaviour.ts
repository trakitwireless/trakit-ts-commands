import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link behaviour} object.
 **/
export abstract class PayBehaviour extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Behaviour}.
	 **/
	behaviour: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.behaviour?.id.ToString() ?? "";
		}}