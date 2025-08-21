import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourList } from "./RepBehaviourList";

/**
 * A container for the requested {@link behaviours}.
 **/
export abstract class RepBehaviourList extends Reply {
	/**
	 * The list of requested {@link Behaviour}s.
	 **/
	behaviours: Behaviour[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourListByCompany extends RepBehaviourList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}