import { Payload } from "../../../API/Requests/Payload";

/**
 * Creates multiple new, or updates multiple existing @link {DispatchTask}s.
 **/
export class PayDispatchTaskBatchMerge extends Payload {
	/**
	 * List of @link {DispatchTask}s to update or create.
	 **/
	dispatchTasks: ParamDispatchTaskMerge[];}