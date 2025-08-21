import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="picture"/> object.
 **/
export abstract class PayPicture extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="Picture"/>.
	 **/
	picture: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.picture?.id.ToString() ?? "";
		}}