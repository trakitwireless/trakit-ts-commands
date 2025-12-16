import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfiguration } from "./PayProviderConfiguration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderConfigurationGet } from "../Responses/RepProviderConfigurationGet";

/**
 * Gets details of the specified {@link ProviderConfiguration}.
 */
export class PayProviderConfigurationGet extends PayProviderConfiguration implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfiguration} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationGet(json);
	}
}