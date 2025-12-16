import { email, JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSelfGet } from "../Responses/RepSelfGet";

/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 */
export class PaySelfLogin extends Payload {
	/**
	 * The {@link User}'s login.
	 */
	username: email;
	/**
	 * The {@link User}'s password.
	 */
	password: string;
	/**
	 * A string to identify the User-Agent of the login request.
	 */
	userAgent: string | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.username = json?.username as string ?? "";
		this.password = json?.password as string ?? "";
		this.userAgent = json?.userAgent as string;
	}
	
	override getAction(): {
		kind: "Merge",
		object: SyncName,
		filter: "Login",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self" as SyncName,
			filter: "Login",
			batch: false,
		};
	}

	override createReply(json: JsonObject): Reply {
		return new RepSelfGet(json);
	}

	override toJSON(): any {
		const json: any = {
			...super.toJSON(),
			username: this.username,
			password: this.password,
		};
		if (this.userAgent?.trim()) json.userAgent = this.userAgent;
		return json;
	}
}