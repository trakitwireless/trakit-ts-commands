import { nothing } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 **/
export class PaySelfLogin extends Payload {
	/**
	 * The {@link User}'s login.
	 **/
	username: string;
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
		this.username = json?.username;
		this.password = json?.password;
		this.userAgent = json?.userAgent;
	}
}
