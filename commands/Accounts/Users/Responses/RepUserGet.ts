import { User } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link user}.
 **/
export class RepUserGet extends Reply {
	/**
	 * The requested {@link User}.
	 **/
	user: User;

	constructor(json?: any) {
		super(json);
		this.user = new User(json?.user);
	}
}