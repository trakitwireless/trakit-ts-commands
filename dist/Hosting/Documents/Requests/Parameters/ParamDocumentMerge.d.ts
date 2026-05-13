import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Document}.
 */
export declare class ParamDocumentMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link Document} you want to update.
     * Leave this as `null` when creating a new {@link Document}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link Document} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link Document}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link Document}.
     */
    notes: string | nothing;
    /**
     * The time at which the {@link Document} will automatically be purged from the system.
     */
    expiry: Date | nothing;
    /**
     * Name/value collections of custom fields used to refer to external systems.
     * If the value is null, the references are removed from the {@link Document}.
     */
    references: Map<string, string | nothing> | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamDocumentMerge.d.ts.map