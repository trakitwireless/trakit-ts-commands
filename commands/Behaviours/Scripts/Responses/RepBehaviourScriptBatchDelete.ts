import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="behaviourScript"/>.
 **/
export class RepBehaviourScriptBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="BehaviourScript"/>.
	 **/
	behaviourScripts: ContentIdDeleted[];}