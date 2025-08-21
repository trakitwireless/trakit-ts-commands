import { Payload } from "../../../API/Requests/Payload";

/**
 * Creates multiple new, or updates multiple existing <see cref="DispatchTask"/>s.
 **/
export class PayDispatchTaskBatchMerge extends Payload {
	/**
	 * List of <see cref="DispatchTask"/>s to update or create.
	 **/
	dispatchTasks: ParamDispatchTaskMerge[];}