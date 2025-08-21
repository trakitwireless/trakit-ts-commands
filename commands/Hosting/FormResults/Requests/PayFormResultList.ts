import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayFormResultList } from "./PayFormResultList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {formResult}.

 **/
export abstract class PayFormResultList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {FormResult}s.

	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.

 **/
export class PayFormResultListByCompany extends PayFormResultList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.

	 **/
	company: ParamId;}