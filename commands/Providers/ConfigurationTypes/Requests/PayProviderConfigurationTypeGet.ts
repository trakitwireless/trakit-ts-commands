import { Reply } from "../../../API/Responses/Reply";
import { PayProviderConfigurationType } from "./PayProviderConfigurationType";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderConfigurationTypeGet } from "../Responses/RepProviderConfigurationTypeGet";

/**
 * Gets details of the specified {@link ProviderConfigurationType}.
 **/
export class PayProviderConfigurationTypeGet extends PayProviderConfigurationType implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderConfigurationType} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepProviderConfigurationTypeGet(json);
	}
}