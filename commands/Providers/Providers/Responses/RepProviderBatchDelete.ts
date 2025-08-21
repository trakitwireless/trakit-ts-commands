import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="provider"/>.
 **/
export class RepProviderBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Provider"/>.
	 **/
	providers: ContentIdendifierDeleted[];}