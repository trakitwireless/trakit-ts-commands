import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="behaviour"/> object.
 **/
export abstract class PayBehaviour extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="Behaviour"/>.
	 **/
	behaviour: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.behaviour?.id.ToString() ?? "";
		}}