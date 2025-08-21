import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link Icon}.
 **/
export class PayIconMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Icon}.
	 **/
	icon: ParamIconMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.icon?.id?.ToString() ?? "";
		}}