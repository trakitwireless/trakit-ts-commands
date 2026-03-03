import { email, ISerializable, JsonObject } from "@trakit/objects";

/**
 * A container class used to house the login identifying a {@link User}.
 * Used specifically to get session details.
 */
export class ParamLogin implements ISerializable {
	/**
	 * The {@link User}'s login.
	 */
	login: email;

	constructor(json?: JsonObject) {
		this.login = json?.login as email ?? "";
	}

	toJSON(): JsonObject {
		return this.login?.trim()
			? { login: this.login.trim() }
			: {};
	}
}