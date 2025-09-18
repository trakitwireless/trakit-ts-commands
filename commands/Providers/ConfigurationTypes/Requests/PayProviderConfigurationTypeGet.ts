import { PayProviderConfigurationType } from "./PayProviderConfigurationType";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

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
}