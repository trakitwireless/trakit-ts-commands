import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {machine}.
 **/
export class RepMachineBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {Machine}.
	 **/
	machines: ContentIdDeleted[];}