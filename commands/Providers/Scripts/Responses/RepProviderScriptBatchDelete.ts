import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="providerScript"/>.
 **/
export class RepProviderScriptBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="ProviderScript"/>.
	 **/
	providerScripts: ContentIdDeleted[];}