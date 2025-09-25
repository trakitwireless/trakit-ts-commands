import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfiguration } from "./PayProviderConfiguration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderConfigurationGet } from "../Responses/RepProviderConfigurationGet";

/**
 * Gets details of the specified {@link ProviderConfiguration}.
 **/
export class PayProviderConfigurationGet extends PayProviderConfiguration implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfiguration} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigurationGet(json);
	}
}