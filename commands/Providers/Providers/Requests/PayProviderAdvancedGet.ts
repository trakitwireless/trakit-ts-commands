import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderAdvancedGet } from "../Responses/RepProviderAdvancedGet";

/**
 * Gets details of the specified {@link ProviderAdvanced}.
 **/
export class PayProviderAdvancedGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderAdvancedGet(json as JsonObject);
	}
}