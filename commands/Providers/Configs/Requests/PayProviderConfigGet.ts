import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfig } from "./PayProviderConfig";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderConfigGet } from "../Responses/RepProviderConfigGet";

/**
 * Gets details of the specified {@link ProviderConfig}.
 */
export class PayProviderConfigGet extends PayProviderConfig implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfig} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigGet(json);
	}
}