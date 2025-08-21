import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link Picture}.
 **/
export class PayPictureMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Picture}.
	 **/
	picture: ParamPictureMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.picture?.id?.ToString() ?? "";
		}}