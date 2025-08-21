import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerConfiguration"/>.
 **/
	[Obsolete("Use RespProviderConfigBatchDelete instead")]
export class RepProviderConfigurationBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ProviderConfiguration"/>.
	 **/
	providerConfigurations: ContentIdDeleted[];}