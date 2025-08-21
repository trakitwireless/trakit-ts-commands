import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayUserGroupList } from "./PayUserGroupList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="userGroup"/>.
 **/
export abstract class PayUserGroupList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="UserGroup"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayUserGroupListByCompany extends PayUserGroupList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}