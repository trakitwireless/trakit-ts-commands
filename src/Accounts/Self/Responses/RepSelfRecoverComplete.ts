import {
    email,
    JsonObject,
    nothing,
    User
} from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * When successful, this response will contain the {@link User}'s username and temporary password.
 */
export class RepSelfRecoverComplete extends Reply {
	/**
	 * The {@link User}'s username.
	 */
	username: email | nothing;
	/**
	 * The {@link User}'s temporary password.
	 */
	password: string | nothing;

	constructor(json?: JsonObject) {
		super(json as JsonObject);
		this.username = json?.username as email;
		this.password = json?.password as string;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (this.username?.trim()) json.username = this.username;
		if (this.password?.trim()) json.password = this.password;
		return json;
	}
}