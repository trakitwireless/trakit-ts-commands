import { codified, email, guid, JsonObject, nothing, storage, ulong, User, UserSetting } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link UserSetting}s.
 */
export abstract class RepUserSettingList extends ReplySyncListPiece<UserSetting> {
	/**
	 * The list of requested {@link UserSetting}s.
	 */
	userSetting: UserSetting[];

	constructor(json: JsonObject) {
		super(json, "UserSetting", 0);
		this.userSetting = (json?.userSetting as JsonObject[])?.map((u: any) => new UserSetting(u)) ?? [];
	}
	override getList() { return this.userSetting as UserSetting[]; }
	protected override _createBlank() { return new User(); }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepUserSettingListByCompany extends RepUserSettingList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserSetting], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link UserGroup} of the collection.
 */
export class RepUserSettingListByUserGroup extends RepUserSettingList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentIdCompany.fromJSON(json?.userGroup as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserSetting], index: number): boolean {
		const user = storage.User.get(pair[0]) as User;
		return user?.groupIds.includes((this.userGroup as ContentIdCompany).id as ulong);
	}
	override getCompanyId() { return this.userGroup?.company as ulong; }
}