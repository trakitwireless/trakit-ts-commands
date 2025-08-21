import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="behaviour"/>.
 **/
export class RepBehaviourBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Behaviour"/>.
	 **/
	behaviours: ContentIdDeleted[];}