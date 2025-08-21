import { Payload } from "../../../API/Requests/Payload";

/**
 * Deletes multiple <see cref="DispatchTask"/>s.
 **/
export class PayDispatchTaskBatchDelete extends Payload {
	/**
	 * List of <see cref="DispatchTask.id"/>s to delete.
	 **/
	dispatchTasks: ParamId[];}