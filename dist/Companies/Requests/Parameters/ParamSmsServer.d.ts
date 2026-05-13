import { JsonObject, nothing, phone, ushort } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameter values for creating a new or updating an existing {@link SessionPolicy}.
 */
export declare class ParamSmsServer extends ParamMerge {
    /**
     * The list of applications users are allowed to use to create sessions.
     */
    notifyLimit: ushort | nothing;
    /**
     * Restrict session creation to only the provided IPv4 ranges (using CIDR slash-notation).  Leave blank for Internet access.
     */
    phoneNumbers: Map<string, phone[]> | nothing;
    constructor(json?: JsonObject);
    /**
     * Converts the parameter values to a JSON-compatible format.
     */
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamSmsServer.d.ts.map