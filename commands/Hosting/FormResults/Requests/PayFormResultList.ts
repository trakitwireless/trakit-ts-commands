import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayFormResultList } from "./PayFormResultList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="formResult"/>.

 **/
export abstract class PayFormResultList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="FormResult"/>s.

	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.

 **/
export class PayFormResultListByCompany extends PayFormResultList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.

	 **/
	company: ParamId;}