import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayPlaceList } from "./PayPlaceList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {place}.

 **/
export abstract class PayPlaceList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {Place}s.

	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.

 **/
export class PayPlaceListByCompany extends PayPlaceList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.

	 **/
	company: ParamId;}