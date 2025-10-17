import { byte, int, ipv4, JsonObject, nothing, SessionMultiUser, ushort, utility } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";


/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 **/
export class ParamEmailServer extends ParamMerge {
	/**
	 * The type of incoming protocol to use (IMAP or POP3).
	 */
	incomingType: "POP3" | "IMAP" | nothing;
	/**
	 * The domain or IP address of the incoming email server.
	 */
	incomingAddress: string | nothing;
	/**
	 * The port number of the incoming email server.
	 */
	incomingPort: number | nothing;
	/**
	 * The username used to login to the incoming email server.
	 */
	incomingLogin: string | nothing;
	/**
	 * The password used to login to the incoming email server.
	 */
	incomingPassword: string | nothing;
	/**
	 * Is the incoming email server using a secure SSL/TLS connection (it should).
	 */
	incomingSecure: boolean | nothing;
	/**
	 * IMAP message sequence number so only recent messages are retrieved.
	 */
	incomingMessageNumber: int | nothing;

	/**
	 * The domain or IP address of the outgoing email server.
	 */
	outgoingAddress: string | nothing;
	/**
	 * The port number of the outgoing email server.
	 */
	outgoingPort: number | nothing;
	/**
	 * The username used to login to the outgoing email server.
	 */
	outgoingLogin: string | nothing;
	/**
	 * The password used to login to the outgoing email server.
	 */
	outgoingPassword: string | nothing;
	/**
	 * Is the outgoing email server using a secure SSL/TLS connection (it should).
	 */
	outgoingSecure: boolean | nothing;
	/**
	 * An optional field which can be set as the "sent from" and/or "reply-to" address.
	 */
	outgoingReplyTo: string | nothing;
	
	constructor(json?: JsonObject) {
		super();
		this.incomingType = json?.incomingType as "POP3" | "IMAP";
		this.incomingAddress = json?.incomingAddress as string;
		this.incomingPort = json?.incomingPort as number;
		this.incomingLogin = json?.incomingLogin as string;
		this.incomingPassword = json?.incomingPassword as string;
		this.incomingSecure = json?.incomingSecure as boolean;
		this.incomingMessageNumber = json?.incomingMessageNumber as int;

		this.outgoingAddress = json?.outgoingAddress as string;
		this.outgoingPort = json?.outgoingPort as number;
		this.outgoingLogin = json?.outgoingLogin as string;
		this.outgoingPassword = json?.outgoingPassword as string;
		this.outgoingSecure = json?.outgoingSecure as boolean;
		this.outgoingReplyTo = json?.outgoingReplyTo as string;
	}

	/**
	 * Converts the parameter values to a JSON-compatible format.
	 **/
	override toJSON(): any {
		const json: any = {};
		if (this.incomingType) json.incomingType = this.incomingType;
		if (this.incomingAddress) json.incomingAddress = this.incomingAddress;
		if (utility.isntNaN(this.incomingPort)) json.incomingPort = this.incomingPort;
		if (this.incomingLogin) json.incomingLogin = this.incomingLogin;
		if (this.incomingPassword) json.incomingPassword = this.incomingPassword;
		if (typeof this.incomingSecure === "boolean") json.incomingSecure = this.incomingSecure;
		if (utility.isntNaN(this.incomingMessageNumber)) json.incomingMessageNumber = this.incomingMessageNumber;
		
		if (this.outgoingAddress) json.outgoingAddress = this.outgoingAddress;
		if (utility.isntNaN(this.outgoingPort)) json.outgoingPort = this.outgoingPort;
		if (this.outgoingLogin) json.outgoingLogin = this.outgoingLogin;
		if (this.outgoingPassword) json.outgoingPassword = this.outgoingPassword;
		if (typeof this.outgoingSecure === "boolean") json.outgoingSecure = this.outgoingSecure;
		if (this.outgoingReplyTo) json.outgoingReplyTo = this.outgoingReplyTo;
		return json;
	}
}