import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepSelfPasswordMerge extends Reply {
	/**
	 * Specific date/time of when the password will expire.
	 **/
	expires: Date | undefined;
	/**
	 * Your <see cref="Company"/>'s <see cref="PasswordPolicy">password policy</see>.
	 **/
	passwordPolicy: PasswordPolicy;}