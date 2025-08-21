import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";

/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 **/
export class ParamSessionPolicy extends ParamMerge {
	/**
	 * The list of applications users are allowed to use to create sessions.
	 **/
	applications: string[];
	/**
	 * Restrict session creation to only the provided IPv4 ranges (using CIDR slash-notation).  Leave blank for Internet access.
	 **/
		public string[] ipv4Ranges;
	/**
	 * Defines the behaviour of the system when a user creates multiple sessions.
	 **/
	multiUser: SessionMultiUser | undefined;
	/**
	 * Defines whether a session should be automatically killed when the connection breaks.
	 **/
	idleAllowed: boolean | undefined;
	/**
	 * The lifetime duration of a session in minutes.
	 **/
	expireTimeout: ushort | undefined;
	/**
	 * The maximum number of sessions allowed per user.
	 **/
	maxSessions: byte | undefined;}