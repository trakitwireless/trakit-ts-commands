import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {providerConfiguration}.
 **/
	[Obsolete("Use RespProviderConfigBatchDelete instead")]
export class RepProviderConfigurationBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {ProviderConfiguration}.
	 **/
	providerConfigurations: ContentIdDeleted[];}