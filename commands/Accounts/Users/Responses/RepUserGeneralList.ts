import { JsonObject, nothing, UserGeneral } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link UserGeneral}s.
 **/
export abstract class RepUserGeneralList extends Reply {
	/**
	 * The list of requested {@link UserGeneral}s.
	 **/
	userGenerals: UserGeneral[];

	constructor(json: JsonObject) {
		super(json);
		this.userGenerals = (json?.userGenerals as JsonObject[])?.map((u: any) => new UserGeneral(u)) ?? [];
	}
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
}