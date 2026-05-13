import { byte, ipv4, JsonObject, nothing, SessionMultiUser, ushort } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 */
export declare class ParamSessionPolicy extends ParamMerge {
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
    constructor(json?: JsonObject);
    /**
     * Converts the parameter values to a JSON-compatible format.
     */
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamSessionPolicy.d.ts.map