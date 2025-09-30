import { JsonObject } from "@trakit/objects";
import { Session } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link User} of the current session.
 **/
export class RepSessionGet extends Reply {
	/**
	 * The requested {@link Session} details.
	 **/
	session: Session;

	constructor(json: JsonObject) {
		super(json);
		this.session = Session.fromJSON(json?.session as JsonObject);
	}
}