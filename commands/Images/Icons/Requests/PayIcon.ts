import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the @link {icon} object.
 **/
export abstract class PayIcon extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the @link {Icon}.
	 **/
	icon: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.icon?.id.ToString() ?? "";
		}}