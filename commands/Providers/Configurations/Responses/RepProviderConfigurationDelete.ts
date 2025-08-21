import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerConfiguration"/>.
 **/
	[Obsolete("Use RespProviderConfigDelete instead")]
export class RepProviderConfigurationDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ProviderConfiguration"/>.
	 **/
	providerConfiguration: ContentIdDeleted;}