import { byte, nothing, PasswordExpiryMode } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameter values for creating a new or updating an existing {@link PasswordPolicy}.
 **/
export class ParamPasswordPolicy extends ParamMerge {
	/**
	 * The minimum number of characters required.
	 **/
	minimumLength: byte | nothing;
	/**
	 * Do passwords require alphabetical characters.
	 **/
	includeLetters: boolean | nothing;
	/**
	 * Do passwords require numeric characters.
	 **/
	includeNumbers: boolean | nothing;
	/**
	 * Do passwords require upper-case and lower-case letters.
	 **/
	includeUpperLower: boolean | nothing;
	/**
	 * Do passwords require non-alphanumeric characters.
	 **/
	includeSpecial: boolean | nothing;
	/**
	 * Defines how passwords expire.
	 **/
	expireMode: PasswordExpiryMode | nothing;
	/**
	 * The threshold for expiry (in days).
	 **/
	expireThreshold: byte | nothing;

	constructor(json: any) {
		super();
		this.minimumLength = json?.minimumLength;
		this.includeLetters = json?.includeLetters;
		this.includeNumbers = json?.includeNumbers;
		this.includeUpperLower = json?.includeUpperLower;
		this.includeSpecial = json?.includeSpecial;
		this.expireMode = json?.expireMode;
		this.expireThreshold = json?.expireThreshold;
	}

	/**
	 * Converts the parameter values to a JSON-compatible format.
	 **/
	override toJSON(): any {
		const json: any = {};
		if (this.minimumLength) json.minimumLength = this.minimumLength;
		if (this.includeLetters) json.includeLetters = this.includeLetters;
		if (this.includeNumbers) json.includeNumbers = this.includeNumbers;
		if (this.includeUpperLower) json.includeUpperLower = this.includeUpperLower;
		if (this.includeSpecial) json.includeSpecial = this.includeSpecial;
		if (this.expireMode) json.expireMode = this.expireMode;
		if (this.expireThreshold) json.expireThreshold = this.expireThreshold;
		return json;
	}
}