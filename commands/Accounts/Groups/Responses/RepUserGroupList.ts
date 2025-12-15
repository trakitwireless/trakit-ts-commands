import { codified, email, guid, JsonObject, nothing, ulong, UserGroup } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link userGroups}.
 **/
export abstract class RepUserGroupList extends ReplySyncList<UserGroup> {
	/**
	 * The list of requested {@link UserGroup}s.
	 **/
	userGroups: UserGroup[] | nothing;

	constructor(json: JsonObject) {
		super(json, "UserGroup");
		this.userGroups = (json?.userGroups as JsonObject[])?.map((ug: any) => new UserGroup(ug));
	}
	override getList() { return this.userGroups as UserGroup[]; }
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
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserGroup], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}