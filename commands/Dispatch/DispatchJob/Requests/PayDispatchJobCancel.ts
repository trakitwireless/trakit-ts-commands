import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Cancels a {@link DispatchJob}, removing it from the dispatcher's and driver's views.
 **/
export class PayDispatchJobCancel extends Payload implements IPaySingle {
	/**
	 * Parameters given to cancel a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobCancel;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchJob.id.ToString() ?? "";
		}}