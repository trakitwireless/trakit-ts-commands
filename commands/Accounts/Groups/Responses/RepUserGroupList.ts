import { nothing,UserGroup } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link userGroups}.
 **/
export abstract class RepUserGroupList extends Reply {
	/**
	 * The list of requested {@link UserGroup}s.
	 **/
	userGroups: UserGroup[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroups = json?.userGroups?.map((ug: any) => new UserGroup(ug));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepUserGroupListByCompany extends RepUserGroupList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}