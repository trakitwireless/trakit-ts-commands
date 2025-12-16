import { byte, ipv4, JsonObject, nothing, SessionMultiUser, ushort } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 */
export class ParamSessionPolicy extends ParamMerge {
	/**
	 * The list of applications users are allowed to use to create sessions.
	 */
	applications: string[] | nothing;
	/**
	 * Restrict session creation to only the provided IPv4 ranges (using CIDR slash-notation).  Leave blank for Internet access.
	 */
	ipv4Ranges: ipv4[] | nothing;
	/**
	 * Defines the behaviour of the system when a user creates multiple sessions.
	 */
	multiUser: SessionMultiUser | nothing;
	/**
	 * Defines whether a session should be automatically killed when the connection breaks.
	 */
	idleAllowed: boolean | nothing;
	/**
	 * The lifetime duration of a session in minutes.
	 */
	expireTimeout: ushort | nothing;
	/**
	 * The maximum number of sessions allowed per user.
	 */
	maxSessions: byte | nothing;

	constructor(json?: JsonObject) {
		super();
		this.applications = json?.applications as string[];
		this.ipv4Ranges = json?.ipv4Ranges as ipv4[];
		this.multiUser = json?.multiUser as SessionMultiUser;
		this.idleAllowed = json?.idleAllowed as boolean;
		this.expireTimeout = json?.expireTimeout as ushort;
		this.maxSessions = json?.maxSessions as byte;
	}

	/**
	 * Converts the parameter values to a JSON-compatible format.
	 */
	override toJSON(): any {
		const json: any = {};
		if (this.applications) json.applications = this.applications;
		if (this.ipv4Ranges) json.ipv4Ranges = this.ipv4Ranges;
		if (this.multiUser) json.multiUser = this.multiUser;
		if (this.idleAllowed) json.idleAllowed = this.idleAllowed;
		if (this.expireTimeout) json.expireTimeout = this.expireTimeout;
		if (this.maxSessions) json.maxSessions = this.maxSessions;
		return json;
	}
}