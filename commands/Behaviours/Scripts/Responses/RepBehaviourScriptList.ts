import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptList } from "./RepBehaviourScriptList";

/**
 * A container for the requested <see cref="behaviourScripts"/>.
 **/
export abstract class RepBehaviourScriptList extends Reply {
	/**
	 * The list of requested <see cref="BehaviourScript"/>s.
	 **/
	behaviourScripts: BehaviourScript[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepBehaviourScriptListByCompany extends RepBehaviourScriptList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}