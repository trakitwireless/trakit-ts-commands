import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the {@link dispatchTask} object.
 **/
export abstract class PayDispatchTask extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link DispatchTask}.
	 **/
	dispatchTask: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchTask?.id.ToString() ?? "";
		}}