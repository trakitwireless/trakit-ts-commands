import {
    Contact,
    email,
    JsonObject,
    nothing,
    User
} from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * When successful, this response will contain the {@link User}'s name and email address.
 */
export class RepSelfRecoverStart extends Reply {
	/**
	 * {@link User}'s nickname or {@link Contact} name.
	 */
	name: string | nothing;
	/**
	 * The {@link User}'s email address.
	 */
	email: email | nothing;

	constructor(json?: JsonObject) {
		super(json as JsonObject);
		this.name = json?.name as string;
		this.email = json?.email as email;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = super.toJSON();
		if (this.name?.trim()) json.name = this.name;
		if (this.email?.trim()) json.email = this.email;
		return json;
	}
}