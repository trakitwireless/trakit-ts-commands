import { Reply } from "../../../API/Responses/Reply";
import { Payload } from "../../../API/Requests/Payload";
import { RepSelfPassword as RepSelfPassword } from "../Responses/RepSelfPassword";

/**
 * Allows a {@link User} to change their own password.
 **/
export class PaySelfPassword extends Payload {
	/**
	 * Your current password, as verification that you are the proper account owner.
	 **/
	current: string;
	/**
	 * Your new password must conform to your company's {@link PasswordPolicy|password policy}.
	 **/
	password: string;

	constructor(json?: JsonObject) {
		super(json);
		this.current = json?.current ?? "";
		this.password = json?.password ?? "";
	}

	override getAction(): {
		kind: "Merge",
		object: "Self",
		filter: "Password",
		batch: false,
	} {
		return {
			kind: "Merge",
			object: "Self",
			filter: "Password",
			batch: false,
		};
	}

	override createReply(json?: JsonObject): Reply {
		return new RepSelfPassword(json);
	}

	override toJSON(): any {
		return {
			...super.toJSON(),
			current: this.current ?? "",
			password: this.password ?? "",
		};
	}
}