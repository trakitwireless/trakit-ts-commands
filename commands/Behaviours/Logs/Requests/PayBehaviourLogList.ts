import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayBehaviourLogList } from "./PayBehaviourLogList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="behaviourLog"/>.
 **/
export abstract class PayBehaviourLogList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="BehaviourLog"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayBehaviourLogListByCompany extends PayBehaviourLogList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}