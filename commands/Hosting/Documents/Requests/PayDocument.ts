import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link document} object.
 **/
export abstract class PayDocument extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Document}.
	 **/
	document: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.document?.id?.toString() ?? "";
		}}