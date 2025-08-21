import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourList } from "./RepBehaviourList";

/**
 * A container for the requested <see cref="behaviours"/>.
 **/
export abstract class RepBehaviourList extends Reply {
	/**
	 * The list of requested <see cref="Behaviour"/>s.
	 **/
	behaviours: Behaviour[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepBehaviourListByCompany extends RepBehaviourList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}