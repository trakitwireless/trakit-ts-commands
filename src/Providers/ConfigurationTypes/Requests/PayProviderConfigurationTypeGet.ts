import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationTypeGet } from "../Responses/RepProviderConfigurationTypeGet";
import { PayProviderConfigurationType } from "./PayProviderConfigurationType";

/**
 * Gets details of the specified {@link ProviderConfigurationType}.
 */
export class PayProviderConfigurationTypeGet extends PayProviderConfigurationType implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfigurationType} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationTypeGet(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}