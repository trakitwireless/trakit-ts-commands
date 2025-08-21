import { Payload } from "../../../API/Requests/Payload";

/**
 * Cancels multiple existing @link {DispatchJob}s, removing them from the dispatcher's and driver's views.
 **/
export class PayDispatchJobBatchCancel extends Payload {
	/**
	 * List of @link {DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobCancel[];}