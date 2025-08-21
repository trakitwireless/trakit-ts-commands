import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="icon"/>.
 **/
export class RepIconBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Icon"/>.
	 **/
	icons: ContentIdDeleted[];}