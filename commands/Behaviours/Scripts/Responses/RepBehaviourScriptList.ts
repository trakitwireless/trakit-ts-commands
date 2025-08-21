import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptList } from "./RepBehaviourScriptList";

/**
 * A container for the requested @link {behaviourScripts}.
 **/
export abstract class RepBehaviourScriptList extends Reply {
	/**
	 * The list of requested @link {BehaviourScript}s.
	 **/
	behaviourScripts: BehaviourScript[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepBehaviourScriptListByCompany extends RepBehaviourScriptList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}