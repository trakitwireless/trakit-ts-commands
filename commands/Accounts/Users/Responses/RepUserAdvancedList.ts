import { codified, email, guid, JsonObject, nothing, ulong, UserAdvanced } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link UserAdvanced}s.
 */
export abstract class RepUserAdvancedList extends ReplySyncList<UserAdvanced> {
	/**
	 * The list of requested {@link UserAdvanced}s.
	 */
	userAdvanceds: UserAdvanced[];

	constructor(json: JsonObject) {
		super(json, "UserAdvanced");
		this.userAdvanceds = (json?.userAdvanceds as JsonObject[])?.map((u: any) => new UserAdvanced(u)) ?? [];
	}
	override getList() { return this.userAdvanceds as UserAdvanced[]; }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepUserAdvancedListByCompany extends RepUserAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserAdvanced], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link Company} of the collection.
 */
export class RepUserAdvancedListByUserGroup extends RepUserAdvancedList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentIdCompany.fromJSON(json?.userGroup as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserAdvanced], index: number): boolean {
		return pair[1].groupIds.includes((this.userGroup as ContentIdCompany).id as ulong);
	}
	override getCompanyId() { return this.userGroup?.company as ulong; }
}