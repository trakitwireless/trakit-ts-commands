import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters for a {@link User} to update their own {@link Contact}.
 */
export declare class ParamSelfContactMerge extends ParamMergeSubscribable {
    /**
     * Name for yourself.
     */
    name: string | nothing;
    /**
     * Notes for yourself.
     */
    notes: string | nothing;
    /**
     * A collection of other names this person might go by.
     * Use the object key like a name identifier.
     * Example keys: Initials, Nickname, Maiden Name, etc.
     */
    otherNames: Map<string, string | nothing> | nothing;
    /**
     * Email addresses
     * Use the object key like a name of the address.
     * Example keys: Home, Work, Support, Old, etc.
     */
    emails: Map<string, string | nothing> | nothing;
    /**
     * Phone numbers.
     * Use the object key like a name of the phone number.
     * Example keys: Mobile, Fax, Home, Office, etc.
     */
    phones: Map<string, ulong | nothing> | nothing;
    /**
     * Mailing addresses
     * Use the object key like a name of the address.
     * Example keys: Home, Work, Park, etc.
     */
    addresses: Map<string, string | nothing> | nothing;
    /**
     * Websites and other online resources
     * Use the object key like a name of the address.
     * Example keys: Downloads, Support, FTP, etc.
     */
    urls: Map<string, URL | nothing> | nothing;
    /**
     * Date information
     * Use the object key like a name of the date.
     * Example keys: Birthday, Started Date, Retired On, etc.
     */
    dates: Map<string, Date | nothing> | nothing;
    /**
     * Uncategorized information
     * Use the object keys and values however you'd like.
     */
    options: Map<string, string | nothing> | nothing;
    /**
     * A list of roles they play in the {@link Company}.
     */
    roles: string[] | nothing;
    /**
     * {@link Picture}s of yourself.
     */
    pictures: ulong[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamSelfContactMerge.d.ts.map