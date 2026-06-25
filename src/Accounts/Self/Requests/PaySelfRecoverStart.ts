import { Contact, email, JsonObject, nothing, SyncName } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepSelfRecoverStart } from "../Responses/RepSelfRecoverStart";

/**
 * Begins the password recovery process.
 * If successful, will send an email to you with a code used to create a temporary password.
 */
export class PaySelfRecoverStart extends Payload {
	/**
	 * The {@link User}'s login.
	 */
	username: email;
	/**
	 * Optional key in the {@link User}'s {@link Contact.emails} address list to use for recovery.
	 */
	key: string;
	/**
	 * Optional query string used for logging and template replacement in the email.
	 */
	query: string | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.username = json?.username as string ?? "";
		this.key = json?.key as string ?? "";
		this.query = json?.query as string;
	}
	
	override getAction(): {
		kind: "Merge",
		object: SyncName,
		filter: "RecoverStart",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self" as SyncName,
			filter: "RecoverStart",
			batch: false,
		};
	}

	override createReply(json: JsonObject): Reply {
		return new RepSelfRecoverStart(json);
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			...super.toJSON(),
			username: this.username,
			key: this.key,
		};
		if (this.query?.trim()) json.query = this.query;
		return json;
	}
}