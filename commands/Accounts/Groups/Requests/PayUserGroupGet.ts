import { PayUserGroup } from "./PayUserGroup";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="UserGroup"/>.
 **/
export class PayUserGroupGet extends PayUserGroup implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="UserGroup"/> (if it exists).
	 **/
	includeDeleted: boolean;}