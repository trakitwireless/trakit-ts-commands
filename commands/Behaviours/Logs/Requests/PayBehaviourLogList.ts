import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayBehaviourLogList } from "./PayBehaviourLogList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {behaviourLog}.
 **/
export abstract class PayBehaviourLogList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {BehaviourLog}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayBehaviourLogListByCompany extends PayBehaviourLogList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}