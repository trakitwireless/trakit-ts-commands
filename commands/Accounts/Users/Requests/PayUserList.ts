import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayUserList } from "./PayUserList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="user"/>.
 **/
export abstract class PayUserList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="User"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayUserListByCompany extends PayUserList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}