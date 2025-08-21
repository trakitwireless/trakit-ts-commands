import { Payload } from "../../../API/Requests/Payload";

/**
 * Cancels multiple existing <see cref="DispatchJob"/>s, removing them from the dispatcher's and driver's views.
 **/
export class PayDispatchJobBatchCancel extends Payload {
	/**
	 * List of <see cref="DispatchJob"/>s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobCancel[];}