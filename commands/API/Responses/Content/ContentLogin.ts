import { email, nothing } from "@trakit/objects";

/**
 * A container for the login of the {@link User} requested/created.
 **/
export class ContentLogin {
	/**
	 * Creates a {@link ContentLogin} from a JSON object.
	 * @param json - JSON object to create the {@link ContentLogin} from.
	 * @returns A {@link ContentLogin} instance or nothing.
	 */
	static fromJSON(json: any): ContentLogin | nothing {
		return json
			? new ContentLogin(json)
			: null;
	}

	/**
	 * The {@link User}'s login.
	 **/
	login: email;

	constructor(json: any) {
		this.login = json?.login ?? "";
	}
}