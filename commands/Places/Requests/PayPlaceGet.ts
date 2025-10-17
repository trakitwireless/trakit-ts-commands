import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { PayPlace } from "./PayPlace";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { RepPlaceGet } from "../Responses/RepPlaceGet";

/**
 * Gets details of the specified {@link Place}.
 */
export class PayPlaceGet extends PayPlace implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Place} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepPlaceGet(json);
	}
}