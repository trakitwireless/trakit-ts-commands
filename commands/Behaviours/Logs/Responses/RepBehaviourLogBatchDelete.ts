import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {behaviourLog}.
 **/
export class RepBehaviourLogBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {BehaviourLog}.
	 **/
	behaviourLogs: ContentIdDeleted[];}