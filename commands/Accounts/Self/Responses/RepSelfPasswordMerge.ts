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
	 * Your @link {Company}'s @link {PasswordPolicy|password policy}.
	 **/
	passwordPolicy: PasswordPolicy;}