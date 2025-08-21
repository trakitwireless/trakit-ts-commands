import { Payload } from "../../../API/Requests/Payload";

/**
 * Completes or modifies multiple existing <see cref="DispatchJob"/>s from a driver's perspective.
 **/
export class PayDispatchJobBatchChange extends Payload {
	/**
	 * List of <see cref="DispatchJob"/>s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobChange[];}