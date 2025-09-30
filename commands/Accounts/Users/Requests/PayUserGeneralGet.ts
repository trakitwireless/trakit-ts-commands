import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserGeneralGet } from "../Responses/RepUserGeneralGet";
import { PayUser } from "./PayUser";

/**
 * Gets details of the specified {@link UserGeneral}.
 **/
export class PayUserGeneralGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserGeneralGet(json as JsonObject);
	}
}