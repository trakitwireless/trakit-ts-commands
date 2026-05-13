import { byte, JsonObject, nothing, PasswordExpiryMode } from "@trakit/objects";
import { ParamMerge } from "../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameter values for creating a new or updating an existing {@link PasswordPolicy}.
 */
export declare class ParamPasswordPolicy extends ParamMerge {
    /**
     * The minimum number of characters required.
     */
    minimumLength: byte | nothing;
    /**
     * Do passwords require alphabetical characters.
     */
    includeLetters: boolean | nothing;
    /**
     * Do passwords require numeric characters.
     */
    includeNumbers: boolean | nothing;
    /**
     * Do passwords require upper-case and lower-case letters.
     */
    includeUpperLower: boolean | nothing;
    /**
     * Do passwords require non-alphanumeric characters.
     */
    includeSpecial: boolean | nothing;
    /**
     * Defines how passwords expire.
     */
    expireMode: PasswordExpiryMode | nothing;
    /**
     * The threshold for expiry (in days).
     */
    expireThreshold: byte | nothing;
    constructor(json?: JsonObject);
    /**
     * Converts the parameter values to a JSON-compatible format.
     */
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamPasswordPolicy.d.ts.map