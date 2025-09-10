import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing {@link DispatchJob}.
 **/
export class PayDispatchJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchJob?.id?.toString() ?? "";
		}}