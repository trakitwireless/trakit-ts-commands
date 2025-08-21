import { PayProviderConfiguration } from "./PayProviderConfiguration";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ProviderConfiguration"/>.
 **/
	[Obsolete("Use ReqProviderConfigGet instead")]
export class PayProviderConfigurationGet extends PayProviderConfiguration implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ProviderConfiguration"/> (if it exists).
	 **/
	includeDeleted: boolean;}