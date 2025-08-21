import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayUserGroupList } from "./PayUserGroupList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link userGroup}.
 **/
export abstract class PayUserGroupList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link UserGroup}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayUserGroupListByCompany extends PayUserGroupList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}