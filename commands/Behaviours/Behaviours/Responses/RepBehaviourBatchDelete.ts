import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {behaviour}.
 **/
export class RepBehaviourBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {Behaviour}.
	 **/
	behaviours: ContentIdDeleted[];}