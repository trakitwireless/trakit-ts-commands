import { JsonObject } from "@trakit/objects";
import { Session } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link User} of the current session.
 **/
export class RepSessionGet extends ReplySyncGet<Session> {
	/**
	 * The requested {@link Session} details.
	 **/
	session: Session;

	constructor(json: JsonObject) {
		super(json, "Session");
		this.session = Session.fromJSON(json?.session as JsonObject);
	}
	override getObject() { return this.session as Session; }
}