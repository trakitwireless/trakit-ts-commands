import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepUserAdvancedGet } from "../Responses/RepUserAdvancedGet";
import { PayUser } from "./PayUser";

/**
 * Gets details of the specified {@link UserAdvanced}.
 **/
export class PayUserAdvancedGet extends PayUser implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepUserAdvancedGet(json as JsonObject);
	}
}