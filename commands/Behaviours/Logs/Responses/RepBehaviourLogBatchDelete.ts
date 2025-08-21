import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="behaviourLog"/>.
 **/
export class RepBehaviourLogBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="BehaviourLog"/>.
	 **/
	behaviourLogs: ContentIdDeleted[];}