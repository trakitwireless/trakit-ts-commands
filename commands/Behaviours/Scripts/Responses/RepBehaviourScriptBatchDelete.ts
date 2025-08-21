import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {behaviourScript}.
 **/
export class RepBehaviourScriptBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {BehaviourScript}.
	 **/
	behaviourScripts: ContentIdDeleted[];}