import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="dispatchTask"/>.
 **/
export class RepDispatchTaskBatchDeleted extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="DispatchTask"/>.
	 **/
	dispatchTasks: ContentIdDeleted[];}