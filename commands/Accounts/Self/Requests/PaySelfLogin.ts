import { email, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepSelfGet } from "../Responses/RepSelfGet";

/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 **/
export class PaySelfLogin extends Payload {
	/**
	 * The {@link User}'s login.
	 **/
	username: email;
	/**
	 * The {@link User}'s password.
	 **/
	password: string;
	/**
	 * A string to identify the User-Agent of the login request.
	 **/
	userAgent: string | nothing;

	constructor(json: any) {
		super(json);
		this.username = json?.username ?? "";
		this.password = json?.password ?? "";
		this.userAgent = json?.userAgent;
	}
	
	override getAction(): {
		kind: "Merge",
		object: "Self",
		filter: "Login",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self",
			filter: "Login",
			batch: false,
		};
	}

	override createReply(json: any): Reply {
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