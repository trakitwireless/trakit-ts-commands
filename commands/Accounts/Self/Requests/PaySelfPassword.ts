import { Payload } from "../../../API/Requests/Payload";

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
}