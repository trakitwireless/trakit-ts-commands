import { int, JsonObject, nothing } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 */
export declare class ParamEmailServer extends ParamMerge {
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
    constructor(json?: JsonObject);
    /**
     * Converts the parameter values to a JSON-compatible format.
     */
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamEmailServer.d.ts.map