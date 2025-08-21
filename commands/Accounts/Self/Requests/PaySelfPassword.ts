import { Payload } from "../../../API/Requests/Payload";

/**
 * Allows a <see cref="User"/> to change their own password.
 **/
export class PaySelfPassword extends Payload {
	/**
	 * Your current password, as verification that you are the proper account owner.
	 **/
		[JsonIgnore]
	current: string;
	/**
	 * Your new password must conform to your company's <see cref="PasswordPolicy">password policy</see>.
	 **/
		[JsonIgnore]
	password: string;}