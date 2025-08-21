import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing @link {Contact}.
 **/
export class PayContactMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a @link {Contact}.
	 **/
	contact: ParamContactMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.contact?.id?.ToString() ?? "";
		}}