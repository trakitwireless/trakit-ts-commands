import { Payload } from "../../../API/Requests/Payload";

/**
 * Completes or modifies multiple existing @link {DispatchJob}s from a driver's perspective.
 **/
export class PayDispatchJobBatchChange extends Payload {
	/**
	 * List of @link {DispatchJob}s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobChange[];}