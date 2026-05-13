import { codified, email, guid, JsonObject, nothing, storage, ulong, User, UserState } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link UserState}s.
 */
export abstract class RepUserStateList extends ReplySyncListPiece<UserState> {
	/**
	 * The list of requested {@link UserState}s.
	 */
	userStates: UserState[];

	constructor(json: JsonObject) {
		super(json, "UserState", 0);
		this.userStates = (json?.userStates as JsonObject[])?.map((u: any) => new UserState(u)) ?? [];
	}
	override getList() { return this.userStates as UserState[]; }
	protected override _createBlank() { return new User(); }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepUserStateListByCompany extends RepUserStateList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserState], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link UserGroup} of the collection.
 */
export class RepUserStateListByUserGroup extends RepUserStateList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentIdCompany.fromJSON(json?.userGroup as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserState], index: number): boolean {
		const user = storage.User.get(pair[0]) as User;
		return user?.groupIds.includes((this.userGroup as ContentIdCompany).id as ulong);
	}
	override getCompanyId() { return this.userGroup?.company as ulong; }
}