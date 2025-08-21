import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="place"/> object.

 **/
export abstract class PayPlace extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="Place"/>.

	 **/
	place: ParamId;

	/**
	 *

	 **/
		getKey(): string {
			return  this.place?.id.ToString() ?? "";
		}}