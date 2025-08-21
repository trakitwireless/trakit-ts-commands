import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {dispatchJob}.
 **/
export class RepDispatchJobBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {DispatchJob}.
	 **/
	dispatchJobs: ContentIdDeleted[];}