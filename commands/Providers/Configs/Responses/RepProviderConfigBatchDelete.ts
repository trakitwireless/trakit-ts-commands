import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfig}.
 **/
export class RepProviderConfigBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderConfig}.
	 **/
	providerConfigs: ContentIdDeleted[];}