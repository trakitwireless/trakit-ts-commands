import { PayContact } from "./PayContact";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link Contact}.
 **/
export class PayContactGet extends PayContact implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Contact} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}