import { byte, ipv4, JsonObject, nothing, phone, serialization, SessionMultiUser, ushort, utility } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 **/
export class ParamSmsServer extends ParamMerge {
	/**
	 * The list of applications users are allowed to use to create sessions.
	 **/
	notifyLimit: ushort | nothing;
	/**
	 * Restrict session creation to only the provided IPv4 ranges (using CIDR slash-notation).  Leave blank for Internet access.
	 **/
	phoneNumbers: Map<string, phone[]> | nothing;

	constructor(json?: JsonObject) {
		super();
		this.notifyLimit = json?.notifyLimit as ushort;
		this.phoneNumbers = json?.phoneNumbers
			? serialization.toMapPredicate(json.phoneNumbers as object, (key, value) => [key, utility.phoneNumber(value) || null])
			: new Map;
	}

	/**
	 * Converts the parameter values to a JSON-compatible format.
	 **/
	override toJSON(): any {
		const json: any = {};
		if (utility.isntNaN(this.notifyLimit)) json.notifyLimit = this.notifyLimit;
		if (this.phoneNumbers?.size) json.phoneNumbers = serialization.fromMap(this.phoneNumbers);
		return json;
	}
}