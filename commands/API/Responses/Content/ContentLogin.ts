import { email, ISerializable, JsonObject, nothing } from "@trakit/objects";
import { IContent } from "./IContent";

/**
 * A container for the login of the {@link User} requested/created.
 */
export class ContentLogin implements IContent, ISerializable {
	/**
	 * Creates a {@link ContentLogin} from a JSON object.
	 * @param json - JSON object to create the {@link ContentLogin} from.
	 * @returns A {@link ContentLogin} instance or nothing.
	 */
	static fromJSON(json: JsonObject): ContentLogin | nothing {
		return json
			? new ContentLogin(json)
			: null;
	}

	/**
	 * The {@link User}'s login.
	 */
	login: email | nothing;

	constructor(json: JsonObject) {
		this.login = json?.login as email;
	}

	getKey() { return this.login as email; }
	toJSON(): JsonObject {
		return {
			login: this.login ?? null,
		};
	}
}