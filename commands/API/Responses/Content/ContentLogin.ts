import { email } from "@trakit/objects";

/**
 * A container for the login of the {@link User} requested/created.
 **/
export class ContentLogin {
	/**
	 * The {@link User}'s login.
	 **/
	login: email;

	constructor(json: any) {
		this.login = json?.login ?? "";
	}
}