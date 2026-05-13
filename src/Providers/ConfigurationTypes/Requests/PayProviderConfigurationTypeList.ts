import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderConfigurationTypeList } from "../Responses/RepProviderConfigurationTypeList";

/**
 * Gets details of the specified {@link providerConfigurationType}.
 */
export class PayProviderConfigurationTypeList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link ProviderConfigurationType}s.
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
	override createReply(json: JsonObject): Reply {
		return new RepProviderConfigurationTypeList(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}