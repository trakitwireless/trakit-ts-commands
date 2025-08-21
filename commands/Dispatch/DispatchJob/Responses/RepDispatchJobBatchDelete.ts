import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="dispatchJob"/>.
 **/
export class RepDispatchJobBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="DispatchJob"/>.
	 **/
	dispatchJobs: ContentIdDeleted[];}