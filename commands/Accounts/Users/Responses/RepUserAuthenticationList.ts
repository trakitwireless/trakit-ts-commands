import { codified, email, guid, JsonObject, nothing, storage, ulong, User, UserAuthentication } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link UserAuthentication}s.
 */
export abstract class RepUserAuthenticationList extends ReplySyncListPiece<UserAuthentication> {
	/**
	 * The list of requested {@link UserAuthentication}s.
	 */
	userAuthentications: UserAuthentication[];

	constructor(json: JsonObject) {
		super(json, "UserAuthentication", 0);
		this.userAuthentications = (json?.userAuthentications as JsonObject[])?.map((u: any) => new UserAuthentication(u)) ?? [];
	}
	override getList() { return this.userAuthentications as UserAuthentication[]; }
	protected override _createBlank() { return new User(); }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepUserAuthenticationListByCompany extends RepUserAuthenticationList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserAuthentication], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link UserGroup} of the collection.
 */
export class RepUserAuthenticationListByUserGroup extends RepUserAuthenticationList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 */
	userGroup: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentIdCompany.fromJSON(json?.userGroup as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserAuthentication], index: number): boolean {
		const user = storage.User.get(pair[0]) as User;
		return user?.groupIds.includes((this.userGroup as ContentIdCompany).id as ulong);
	}
	override getCompanyId() { return this.userGroup?.company as ulong; }
}