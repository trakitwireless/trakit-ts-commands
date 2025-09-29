import { Session } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentLoginCompany } from "../../../API/Responses/Content/ContentLoginCompany";

/**
 * A container for the requested {@link sessions}.
 **/
export abstract class RepSessionList extends Reply {
	/**
	 * The list of requested {@link Session}.
	 **/
	sessions: Session[];

	constructor(json: JsonObject) {
		super(json);
		this.sessions = json?.sessions.map((s: any) => new Session(s)) ?? [];
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepSessionListByCompany extends RepSessionList {
	/**
	 * An object to contain the "id" of the {@link Company} to which the array of {@link Session}s belong.
	 **/
	company: ContentId;

	constructor(json: JsonObject) {
		super(json);
		this.company = new ContentId(json?.company);
	}
}
/**
 * Contains the {@link User.login} of the collection.
 **/
export class RepSessionListByUser extends RepSessionList {
	/**
	 * An object to contain the "login" of the {@link User} to which the array of {@link Session}s belong.
	 **/
	user: ContentLoginCompany;

	constructor(json: JsonObject) {
		super(json);
		this.user = new ContentLoginCompany(json?.user);
	}
}