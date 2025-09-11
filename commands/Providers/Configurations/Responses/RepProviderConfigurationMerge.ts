import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfiguration}.
 **/
	[Obsolete("Use RespProviderConfigMerge instead")]
export class RepProviderConfigurationMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	providerConfiguration: ContentIdCompany;}