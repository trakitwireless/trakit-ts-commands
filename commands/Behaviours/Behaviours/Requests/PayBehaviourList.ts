import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayBehaviourList } from "./PayBehaviourList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="behaviour"/>.
 **/
export abstract class PayBehaviourList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="Behaviour"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayBehaviourListByCompany extends PayBehaviourList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}