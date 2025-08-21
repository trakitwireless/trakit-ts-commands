import { Payload } from "../../../API/Requests/Payload";

/**
 * Deletes multiple @link {DispatchJob}s.
 **/
export class PayDispatchJobBatchDelete extends Payload {
	/**
	 * List of @link {DispatchJob.id}s to delete.
	 **/
	dispatchJobs: ParamId[];}