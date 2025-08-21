import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="Contact"/>.
 **/
export class PayContactMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="Contact"/>.
	 **/
	contact: ParamContactMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.contact?.id?.ToString() ?? "";
		}}