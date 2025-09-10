import { PayUser } from "./PayUser";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link User}.
 **/
export class PayUserGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link User} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}
}