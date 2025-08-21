import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerScript}.
 **/
export class RepProviderScriptBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ProviderScript}.
	 **/
	providerScripts: ContentIdDeleted[];}