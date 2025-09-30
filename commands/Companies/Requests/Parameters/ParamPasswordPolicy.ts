import { byte, JsonObject, nothing, PasswordExpiryMode, utility } from "@trakit/objects";
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

	constructor(json?: JsonObject) {
		super();
		this.minimumLength = json?.minimumLength as byte;
		this.includeLetters = json?.includeLetters as boolean;
		this.includeNumbers = json?.includeNumbers as boolean;
		this.includeUpperLower = json?.includeUpperLower as boolean;
		this.includeSpecial = json?.includeSpecial as boolean;
		this.expireMode = json?.expireMode as PasswordExpiryMode;
		this.expireThreshold = json?.expireThreshold as byte;
	}

	/**
	 * Converts the parameter values to a JSON-compatible format.
	 **/
	override toJSON(): any {
		const json: any = {};
		if (this.minimumLength) json.minimumLength = this.minimumLength;
		if (!utility.isNothing(this.includeLetters)) json.includeLetters = this.includeLetters;
		if (!utility.isNothing(this.includeNumbers)) json.includeNumbers = this.includeNumbers;
		if (!utility.isNothing(this.includeUpperLower)) json.includeUpperLower = this.includeUpperLower;
		if (!utility.isNothing(this.includeSpecial)) json.includeSpecial = this.includeSpecial;
		if (this.expireMode) json.expireMode = this.expireMode;
		if (this.expireThreshold) json.expireThreshold = this.expireThreshold;
		return json;
	}
}