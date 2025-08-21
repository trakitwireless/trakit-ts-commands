import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayBehaviourScriptList } from "./PayBehaviourScriptList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link behaviourScript}.
 **/
export abstract class PayBehaviourScriptList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link BehaviourScript}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourScriptListByCompany extends PayBehaviourScriptList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}