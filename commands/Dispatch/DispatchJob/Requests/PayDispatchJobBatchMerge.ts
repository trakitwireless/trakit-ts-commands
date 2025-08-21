import { Payload } from "../../../API/Requests/Payload";

/**
 * Creates multiple new, or updates multiple existing <see cref="DispatchJob"/>s.
 **/
export class PayDispatchJobBatchMerge extends Payload {
	/**
	 * List of <see cref="DispatchJob"/>s to update or create.
	 **/
	dispatchJobs: ParamDispatchJobMerge[];}