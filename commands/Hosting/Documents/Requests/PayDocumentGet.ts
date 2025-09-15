import { PayDocument } from "./PayDocument";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link Document}.
 **/
export class PayDocumentGet extends PayDocument implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Document} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}