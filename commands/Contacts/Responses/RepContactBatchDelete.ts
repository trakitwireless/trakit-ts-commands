import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the @link {contact}.
 **/
export class RepContactBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {Contact}.
	 **/
	contacts: ContentIdDeleted[];}