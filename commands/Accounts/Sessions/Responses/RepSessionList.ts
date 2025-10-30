import { JsonObject, Session } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentLoginCompany } from "../../../API/Responses/Content/ContentLoginCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link sessions}.
 **/
export abstract class RepSessionList extends ReplySyncList<Session> {
	/**
	 * The list of requested {@link Session}.
	 **/
	sessions: Session[];

	constructor(json: JsonObject) {
		super(json);
		this.sessions = (json?.sessions as JsonObject[])?.map((s: any) => new Session(s)) ?? [];
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
		this.company = new ContentId(json?.company as JsonObject);
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
		this.user = new ContentLoginCompany(json?.user as JsonObject);
	}
}