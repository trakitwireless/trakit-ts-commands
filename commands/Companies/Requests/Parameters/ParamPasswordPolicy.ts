import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameter values for creating a new or updating an existing {@link PasswordPolicy}.
 **/
export class ParamPasswordPolicy extends ParamMerge {
	/**
	 * The minimum number of characters required.
	 **/
	minimumLength: byte | undefined;
	/**
	 * Do passwords require alphabetical characters.
	 **/
	includeLetters: boolean | undefined;
	/**
	 * Do passwords require numeric characters.
	 **/
	includeNumbers: boolean | undefined;
	/**
	 * Do passwords require upper-case and lower-case letters.
	 **/
	includeUpperLower: boolean | undefined;
	/**
	 * Do passwords require non-alphanumeric characters.
	 **/
	includeSpecial: boolean | undefined;
	/**
	 * Defines how passwords expire.
	 **/
	expireMode: PasswordExpiryMode | undefined;
	/**
	 * The threshold for expiry (in days).
	 **/
	expireThreshold: byte | undefined;}