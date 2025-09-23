import { nothing, PasswordPolicy } from "@trakit/objects";
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

	constructor(json: any) {
		super(json);
		this.expires = new Date(json?.expires);
		this.passwordPolicy = json["passwordPolicy"]
			? PasswordPolicy.fromJSON(json["passwordPolicy"])
			: null;
	}
}