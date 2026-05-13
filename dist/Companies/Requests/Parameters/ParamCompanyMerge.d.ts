import { JsonObject, LabelStyle, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPasswordPolicy } from "./ParamPasswordPolicy";
import { ParamSessionPolicy } from "./ParamSessionPolicy";
/**
 * Parameters used to create or update an {@link Company}.
 */
export declare class ParamCompanyMerge extends ParamMergeSubscribable {
    /**
     * Unique identifier of the Company.
     */
    id: ulong | nothing;
    /**
     * The unique identifier of this company's parent organization.
     */
    parent: ulong | nothing;
    /**
     * The organizational name.
     */
    name: string | nothing;
    /**
     * Notes.
     */
    notes: string | nothing;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     * If the value is null, the references are removed from the {@link Company}.
     */
    references: Map<string, string | nothing> | nothing;
    /**
     * The list of Contacts from this and other companies broken down by contact role.
     */
    directory: Map<string, ulong[] | nothing> | nothing;
    /**
     * The styles for labels added to Assets, Places, and other things.
     */
    labels: Map<string, LabelStyle | nothing> | nothing;
    /**
     * The styles for status tags added to Assets.
     */
    tags: Map<string, LabelStyle | nothing> | nothing;
    /**
     * The session lifetime policy.
     */
    sessionPolicy: ParamSessionPolicy | nothing;
    /**
     * The password complexity and expiry policy.
     */
    passwordPolicy: ParamPasswordPolicy | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamCompanyMerge.d.ts.map