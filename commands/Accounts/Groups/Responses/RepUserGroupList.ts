import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested <see cref="userGroups"/>.
 **/
export abstract class RepUserGroupList extends Reply {
	/**
	 * The list of requested <see cref="UserGroup"/>s.
	 **/
	userGroups: UserGroup[];
}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepUserGroupListByCompany extends RepUserGroupList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
}