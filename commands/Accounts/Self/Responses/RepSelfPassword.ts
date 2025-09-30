import { datetime, JsonObject, nothing, PasswordPolicy, utility } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepSelfPassword extends Reply {
	/**
	 * Specific date/time of when the password will expire.
	 **/
	expires: Date;
	/**
	 * Your {@link Company}'s {@link PasswordPolicy|password policy}.
	 **/
	passwordPolicy: PasswordPolicy | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.expires = utility.date(json?.expires as datetime);
		this.passwordPolicy = json["passwordPolicy"]
			? PasswordPolicy.fromJSON(json.passwordPolicy as JsonObject)
			: null;
	}
}