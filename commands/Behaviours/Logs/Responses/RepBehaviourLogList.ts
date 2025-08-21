import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourLogList } from "./RepBehaviourLogList";

/**
 * A container for the requested <see cref="behaviourLogs"/>.
 **/
export abstract class RepBehaviourLogList extends Reply {
	/**
	 * The list of requested <see cref="BehaviourLog"/>s.
	 **/
	behaviourLogs: BehaviourLog[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepBehaviourLogListByCompany extends RepBehaviourLogList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}