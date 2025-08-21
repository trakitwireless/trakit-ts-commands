import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 **/
	users: ContentIdDeleted[];}