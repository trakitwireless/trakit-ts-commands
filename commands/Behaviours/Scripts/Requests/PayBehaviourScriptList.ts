import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayBehaviourScriptList } from "./PayBehaviourScriptList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="behaviourScript"/>.
 **/
export abstract class PayBehaviourScriptList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="BehaviourScript"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayBehaviourScriptListByCompany extends PayBehaviourScriptList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}