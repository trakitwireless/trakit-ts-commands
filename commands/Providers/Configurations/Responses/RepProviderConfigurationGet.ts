import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerConfiguration"/>.
 **/
	[Obsolete("Use RespProviderConfigGet instead")]
export class RepProviderConfigurationGet extends Reply {
	/**
	 * The requested <see cref="ProviderConfiguration"/>.
	 **/
	providerConfiguration: ProviderConfiguration;}