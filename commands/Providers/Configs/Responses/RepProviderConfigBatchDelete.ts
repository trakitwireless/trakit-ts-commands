import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerConfig"/>.
 **/
export class RepProviderConfigBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ProviderConfig"/>.
	 **/
	providerConfigs: ContentIdDeleted[];}