import { nothing, User } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserGet extends Reply {
	/**
	 * The requested {@link User}.
	 **/
	user: User | nothing;

	constructor(json?: any) {
		super(json);
		if (json?.user) {
			this.user = new User(json.user);
		}
	}
}