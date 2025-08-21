import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchTask}.
 **/
export class RepDispatchTaskBatchDeleted extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link DispatchTask}.
	 **/
	dispatchTasks: ContentIdDeleted[];}