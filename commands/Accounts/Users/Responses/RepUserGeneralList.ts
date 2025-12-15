import { codified, email, guid, JsonObject, nothing, storage, ulong, User, UserGeneral } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * A container for the requested {@link UserGeneral}s.
 **/
export abstract class RepUserGeneralList extends ReplySyncList<UserGeneral> {
	/**
	 * The list of requested {@link UserGeneral}s.
	 **/
	userGenerals: UserGeneral[];

	constructor(json: JsonObject) {
		super(json, "UserGeneral");
		this.userGenerals = (json?.userGenerals as JsonObject[])?.map((u: any) => new UserGeneral(u)) ?? [];
	}
	override getList() { return this.userGenerals as UserGeneral[]; }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserGeneralListByCompany extends RepUserGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserGeneral], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link UserGroup} of the collection.
 **/
export class RepUserGeneralListByUserGroup extends RepUserGeneralList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 **/
	userGroup: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentIdCompany.fromJSON(json?.userGroup as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, UserGeneral], index: number): boolean {
		const user = storage.User.get(pair[0]) as User;
		return user?.groupIds.includes((this.userGroup as ContentIdCompany).id as ulong);
	}
	override getCompanyId() { return this.userGroup?.company as ulong; }
}