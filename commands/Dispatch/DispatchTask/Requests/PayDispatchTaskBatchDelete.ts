import { Payload } from "../../../API/Requests/Payload";

/**
 * Deletes multiple {@link DispatchTask}s.
 **/
export class PayDispatchTaskBatchDelete extends Payload {
	/**
	 * List of {@link DispatchTask.id}s to delete.
	 **/
	dispatchTasks: ParamId[];}