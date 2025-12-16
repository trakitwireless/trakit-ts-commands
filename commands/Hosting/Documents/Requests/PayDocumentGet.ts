import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentGet } from "../Responses/RepDocumentGet";
import { PayDocument } from "./PayDocument";

/**
 * Gets details of the specified {@link Document}.
 */
export class PayDocumentGet extends PayDocument implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Document} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepDocumentGet(json);
	}
}