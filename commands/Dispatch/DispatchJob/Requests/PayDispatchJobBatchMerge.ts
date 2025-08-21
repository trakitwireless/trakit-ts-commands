import { Payload } from "../../../API/Requests/Payload";

/**
 * Creates multiple new, or updates multiple existing @link {DispatchJob}s.
 **/
export class PayDispatchJobBatchMerge extends Payload {
	/**
	 * List of @link {DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobMerge[];}