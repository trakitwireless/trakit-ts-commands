import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link formTemplate} object.

 **/
export abstract class PayFormTemplate extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link FormTemplate}.

	 **/
	formTemplate: ParamId;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.formTemplate?.id.toString() ?? "";
		}}