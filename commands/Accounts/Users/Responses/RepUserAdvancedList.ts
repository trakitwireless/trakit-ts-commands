import { JsonObject, nothing, UserAdvanced } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link UserAdvanced}s.
 **/
export abstract class RepUserAdvancedList extends Reply {
	/**
	 * The list of requested {@link UserAdvanced}s.
	 **/
	userAdvanceds: UserAdvanced[];

	constructor(json: JsonObject) {
		super(json);
		this.userAdvanceds = (json?.userAdvanceds as JsonObject[])?.map((u: any) => new UserAdvanced(u)) ?? [];
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByCompany extends RepUserAdvancedList {
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
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByGroup extends RepUserAdvancedList {
	/**
	 * Identifier of the {@link UserGroup} to which this collection belongs.
	 **/
	userGroup: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.userGroup = ContentId.fromJSON(json?.userGroup as JsonObject);
	}
}