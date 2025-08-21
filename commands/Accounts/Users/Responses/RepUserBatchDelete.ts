import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="user"/>.
 **/
export class RepUserBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="User"/>.
	 **/
	users: ContentIdDeleted[];}