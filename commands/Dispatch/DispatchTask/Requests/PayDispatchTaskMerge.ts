import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link DispatchTask}.
 **/
export class PayDispatchTaskMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchTask}.
	 **/
	dispatchTask: ParamDispatchTaskMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchTask?.id?.ToString() ?? "";
		}}