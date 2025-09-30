import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderGet } from "../Responses/RepProviderGet";

/**
 * Gets details of the specified {@link Provider}.
 **/
export class PayProviderGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link Provider} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderGet(json as JsonObject);
	}
}