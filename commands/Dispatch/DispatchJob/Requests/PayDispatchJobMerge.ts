import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="DispatchJob"/>.
 **/
export class PayDispatchJobMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="DispatchJob"/>.
	 **/
	dispatchJob: ParamDispatchJobMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchJob?.id?.ToString() ?? "";
		}}