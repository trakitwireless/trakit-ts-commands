import { nothing, User } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link users}.
 **/
export abstract class RepUserList extends Reply {
	/**
	 * The list of requested {@link User}s.
	 **/
	users: User[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.users = json?.users?.map((u: any) => new User(u));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepUserListByCompany extends RepUserList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}