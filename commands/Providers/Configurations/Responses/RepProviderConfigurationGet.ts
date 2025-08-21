import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {providerConfiguration}.
 **/
	[Obsolete("Use RespProviderConfigGet instead")]
export class RepProviderConfigurationGet extends Reply {
	/**
	 * The requested @link {ProviderConfiguration}.
	 **/
	providerConfiguration: ProviderConfiguration;}