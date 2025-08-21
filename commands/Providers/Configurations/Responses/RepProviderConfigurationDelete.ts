import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfiguration}.
 **/
	[Obsolete("Use RespProviderConfigDelete instead")]
export class RepProviderConfigurationDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfiguration}.
	 **/
	providerConfiguration: ContentIdDeleted;}