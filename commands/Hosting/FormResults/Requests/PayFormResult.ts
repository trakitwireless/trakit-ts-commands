import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link formResult} object.

 **/
export abstract class PayFormResult extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link FormResult}.

	 **/
	formResult: ParamId;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.formResult?.id?.toString() ?? "";
		}}