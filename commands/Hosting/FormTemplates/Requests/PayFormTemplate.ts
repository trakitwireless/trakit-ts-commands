import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="formTemplate"/> object.

 **/
export abstract class PayFormTemplate extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="FormTemplate"/>.

	 **/
	formTemplate: ParamId;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.formTemplate?.id.ToString() ?? "";
		}}