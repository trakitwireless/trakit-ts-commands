import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="icon"/> object.
 **/
export abstract class PayIcon extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="Icon"/>.
	 **/
	icon: ParamId;

	/**
		///
	 **/
		getKey(): string {
			return  this.icon?.id.ToString() ?? "";
		}}