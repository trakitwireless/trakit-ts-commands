import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="userGroup"/>.
 **/
export class RepUserGroupBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="UserGroup"/>.
	 **/
	userGroups: ContentIdDeleted[];}