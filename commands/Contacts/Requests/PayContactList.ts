import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayContactList } from "./PayContactList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {contact}.
 **/
export abstract class PayContactList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {Contact}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayContactListByCompany extends PayContactList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}