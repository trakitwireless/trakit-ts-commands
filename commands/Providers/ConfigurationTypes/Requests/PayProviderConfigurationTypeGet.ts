import { PayProviderConfigurationType } from "./PayProviderConfigurationType";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified @link {ProviderConfigurationType}.
 **/
	[Obsolete("Use ReqProviderScriptGet instead")]
export class PayProviderConfigurationTypeGet extends PayProviderConfigurationType implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted @link {ProviderConfigurationType} (if it exists).
	 **/
	includeDeleted: boolean;}