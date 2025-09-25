import { Reply } from "../../../API/Responses/Reply";
import { PayDocument } from "./PayDocument";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepDocumentGet } from "../Responses/RepDocumentGet";

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

	override createReply(json: any): Reply {
		return new RepDocumentGet(json);
	}
}