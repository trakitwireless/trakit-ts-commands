import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayBehaviourList } from "./PayBehaviourList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link behaviour}.
 **/
export abstract class PayBehaviourList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Behaviour}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourListByCompany extends PayBehaviourList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}