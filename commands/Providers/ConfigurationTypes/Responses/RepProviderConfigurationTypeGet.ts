import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerConfigurationType"/>.
 **/
	[Obsolete("Use RespProviderScriptGet instead")]
export class RepProviderConfigurationTypeGet extends Reply {
	/**
	 * The requested <see cref="ProviderConfigurationType"/>.
	 **/
	providerConfigurationType: ProviderConfigurationType;}