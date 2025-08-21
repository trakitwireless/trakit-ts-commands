import { Payload } from "../../../API/Requests/Payload";

/**
 * Deletes multiple <see cref="DispatchJob"/>s.
 **/
export class PayDispatchJobBatchDelete extends Payload {
	/**
	 * List of <see cref="DispatchJob.id"/>s to delete.
	 **/
	dispatchJobs: ParamId[];}