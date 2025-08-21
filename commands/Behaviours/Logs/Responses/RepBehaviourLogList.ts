import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourLogList } from "./RepBehaviourLogList";

/**
 * A container for the requested @link {behaviourLogs}.
 **/
export abstract class RepBehaviourLogList extends Reply {
	/**
	 * The list of requested @link {BehaviourLog}s.
	 **/
	behaviourLogs: BehaviourLog[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepBehaviourLogListByCompany extends RepBehaviourLogList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}