import { PayUserGroup } from "./PayUserGroup";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {UserGroup}.
 **/
export class PayUserGroupGet extends PayUserGroup implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {UserGroup} (if it exists).
	 **/
	includeDeleted: boolean;}