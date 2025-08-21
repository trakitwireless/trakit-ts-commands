import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerConfiguration"/>.
 **/
	[Obsolete("Use RespProviderConfigMerge instead")]
export class RepProviderConfigurationMerge extends Reply {
	/**
	 * An object which contains the <c>id</c> and <c>company</c> keys when there is no error.
	 **/
	providerConfiguration: ContentIdCompany;}