import { email, guid, JsonObject, nothing, storage, ulong, User, UserGeneral } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

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
	override getCollection() { return this.userGenerals as UserGeneral[]; }
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
	override _filterCollection(pair: [string | guid | email | ulong, UserGeneral], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}
/**
 * A container owner {@link UserGroup} of the collection.
 **/
export class RepUserGeneralListByUserGroup extends RepUserGeneralList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 **/
	userGroup: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentId.fromJSON(json?.userGroup as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, UserGeneral], index: number): boolean {
		const user = storage.User.get(pair[0]) as User;
		return user?.groupIds.includes((this.userGroup as ContentId).id as ulong);
	}
}