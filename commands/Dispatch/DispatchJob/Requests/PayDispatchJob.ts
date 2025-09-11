import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link dispatchJob} object.
 **/
export abstract class PayDispatchJob extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link DispatchJob}.
	 **/
	dispatchJob: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchJob?.id?.toString() ?? "";
		}}