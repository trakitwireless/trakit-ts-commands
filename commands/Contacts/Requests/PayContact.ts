import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * A container for the @link {contact} object.
 **/
export abstract class PayContact extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the @link {Contact}.
	 **/
	contact: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.contact?.id.ToString() ?? "";
		}}