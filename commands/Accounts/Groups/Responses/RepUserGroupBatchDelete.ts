import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {userGroup}.
 **/
export class RepUserGroupBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {UserGroup}.
	 **/
	userGroups: ContentIdDeleted[];}