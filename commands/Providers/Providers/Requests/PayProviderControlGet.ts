import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProvider } from "./PayProvider";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderControlGet } from "../Responses/RepProviderControlGet";

/**
 * Gets details of the specified {@link ProviderControl}.
 **/
export class PayProviderControlGet extends PayProvider implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderControlGet(json as JsonObject);
	}
}