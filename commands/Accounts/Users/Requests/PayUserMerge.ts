import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link User}.
 **/
export class PayUserMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link User}.
	 **/
	user: ParamUserMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.user?.login ?? "";
		}}