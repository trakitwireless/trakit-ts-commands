import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="formResult"/> object.

 **/
export abstract class PayFormResult extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="FormResult"/>.

	 **/
	formResult: ParamId;

	/**
	 *

	 **/
		getKey(): string {
			return  this.formResult?.id.ToString() ?? "";
		}}