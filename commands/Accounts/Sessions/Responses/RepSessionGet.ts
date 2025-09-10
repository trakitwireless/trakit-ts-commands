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

	constructor(json: any) {
		super(json);
		this.session = new Session(json?.session);
	}
}